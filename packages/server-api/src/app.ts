import routes from '@/routes';
import Config from '@/services/configServices';
import connect from '@/utils/connect';
import { corsOptions } from '@/utils/cors';
import logger from '@/utils/logger';
import { SocketEvents } from '@enigma-laboratory/shared';
import cors from 'cors';
import express, { Express } from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';

export class CreateApplication {
  private static _instance: CreateApplication;
  private app: Express;
  private server: http.Server;
  private io: Server | undefined;

  private constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.initMiddlewares();
    this.setupRoutes();
    this.initSocketIO();
    this.startServer();
  }

  public static get instance(): CreateApplication {
    if (!CreateApplication._instance) {
      logger.info(`✔️ Init Application`);
      CreateApplication._instance = new CreateApplication();
    }
    return CreateApplication._instance;
  }

  private initMiddlewares(): void {
    logger.info(`✔️ Init middlewares`);
    this.app.use(express.json());
    this.app.use(cors(corsOptions));
  }

  private initSocketIO(): void {
    logger.info(`✔️ Init socketIO`);
    this.io = new Server(this.server, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
      },
    });

    this.io.on(SocketEvents.CONNECTION, (socket: Socket) => {
      logger.debug(`🚀 Socket.IO: Client connected - ID: ${socket.id}`);

      socket.onAnyOutgoing((eventName, ...args) => {
        logger.debug({ args }, `🔊 Socket.IO: ${socket.id} emitted event '${eventName}' with data:`);
      });

      socket.on(SocketEvents.DISCONNECT, reason => {
        logger.debug(`🚀 Socket ${socket.id} disconnected due to ${reason}`);
      });
    });
  }

  public broadcastEvent<T = any>(eventName: string, eventData: T): void {
    if (this.io) {
      this.io.emit(eventName, eventData);
    }
  }

  private setupRoutes(): void {
    routes(this.app);
  }

  private startServer(): void {
    this.server.listen(Config.instance.port, async () => {
      logger.debug(`🚀 App is running port :${Config.instance.port}`);
      try {
        await connect();
      } catch (error) {
        logger.error(`❌ Error connecting to database: ${error}`);
        process.exit(1);
      }
    });
  }

  public stopServer(): void {
    this.server.close(() => {
      logger.info('✔️ Server stopped');
    });
  }
}

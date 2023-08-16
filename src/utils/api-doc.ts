import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { RequestHandler } from 'express';

export default class SwaggerUI {
  private static _instance: SwaggerUI;
  private options: Options;
  private swaggerSpec: object;
  serve: RequestHandler[];

  public static get instance(): SwaggerUI {
    if (!SwaggerUI._instance) {
      this._instance = new this();
    }
    return this._instance;
  }

  constructor() {
    this.serve = swaggerUi.serve;
    this.options = {
      definition: {
        openapi: '3.1.0',
        info: {
          title: 'NodeJS API Project for mongodb',
          version: '1.0.0',
        },
        servers: [{ url: 'http://localhost:1338', description: 'Development server' }],
        tags: [
          { name: 'user', description: '' },
          { name: 'auth', description: '' },
          { name: 'order', description: '' },
          { name: 'order detail', description: '' },
          { name: 'product', description: '' },
          { name: 'session', description: '' },
        ],
      },
      apis: ['./src/routes/**/*.ts'],
    };
    this.swaggerSpec = swaggerJsdoc(this.options);
  }

  public setup(): RequestHandler {
    return swaggerUi.setup(this.swaggerSpec);
  }
}

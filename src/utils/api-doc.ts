import swaggerJsdoc, { Options } from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { RequestHandler } from 'express';

export default class SwaggerUI {
  private static _instance: SwaggerUI;
  private options: Options;
  private swaggerSpec: object;
  private serve: RequestHandler[];

  public static get instance(): SwaggerUI {
    return this._instance || new this();
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

  private setup(): RequestHandler {
    return swaggerUi.setup(this.swaggerSpec);
  }

  public serveAndSetup(): RequestHandler[] {
    return [...this.serve, this.setup()];
  }
}

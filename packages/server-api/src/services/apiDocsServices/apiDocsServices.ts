import Config from "@/services/configServices";
import { RequestHandler } from "express";
import swaggerJsdoc, { Options } from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

export default class SwaggerUI {
  private static _instance: SwaggerUI;
  private options: Options;
  private swaggerSpec: object;
  private serve: RequestHandler[];
  private port: string;
  public static get instance(): SwaggerUI {
    return this._instance || new this();
  }

  constructor() {
    this.serve = swaggerUi.serve;
    this.port = Config.instance.port;
    this.options = {
      definition: {
        openapi: "3.1.0",
        info: {
          title: "Nodejs API for Money Keeper Project + mongodb",
          version: "1.0.0",
        },
        servers: [
          {
            url: "http://localhost:" + this.port,
            description: "Development server",
          },
          {
            url: "https://money-keeper-dev.onrender.com",
            description: "Production server",
          },
        ],
        tags: [
          { name: "user", description: "" },
          { name: "auth", description: "" },
          { name: "order", description: "" },
          { name: "order detail", description: "" },
          { name: "product", description: "" },
          { name: "session", description: "" },
        ],
      },
      apis: ["./src/services/apiDocsServices/swagger/*.yaml"],
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

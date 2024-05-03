"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configServices_1 = __importDefault(require("@/services/configServices"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
class SwaggerUI {
    static get instance() {
        return this._instance || new this();
    }
    constructor() {
        this.serve = swagger_ui_express_1.default.serve;
        this.port = configServices_1.default.instance.port;
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
        this.swaggerSpec = (0, swagger_jsdoc_1.default)(this.options);
    }
    setup() {
        return swagger_ui_express_1.default.setup(this.swaggerSpec);
    }
    serveAndSetup() {
        return [...this.serve, this.setup()];
    }
}
exports.default = SwaggerUI;

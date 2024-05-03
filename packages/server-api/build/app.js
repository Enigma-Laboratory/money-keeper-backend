"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moduleAlias_1 = __importDefault(require("./utils/moduleAlias"));
(0, moduleAlias_1.default)();
const index_1 = __importDefault(require("@/routes/index"));
const configServices_1 = __importDefault(require("@/services/configServices"));
const connect_1 = __importDefault(require("@/utils/connect"));
const cors_1 = require("@/utils/cors");
const logger_1 = __importDefault(require("@/utils/logger"));
const cors_2 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
require("dotenv").config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_2.default)(cors_1.corsOptions));
(0, index_1.default)(app);
app.listen(configServices_1.default.instance.port, () => __awaiter(void 0, void 0, void 0, function* () {
    logger_1.default.info(`App is running port :${configServices_1.default.instance.port}`);
    yield (0, connect_1.default)();
}));

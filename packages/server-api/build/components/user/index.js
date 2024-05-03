"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.updateOneUserHandler = exports.getAllUserHandler = exports.getOneUserHandler = void 0;
const logger_1 = __importDefault(require("@/utils/logger"));
const UserUseCases = __importStar(require("./use-cases"));
const validation_1 = require("./validation");
function getOneUserHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const _id = req.url.replace("/", "");
            const user = yield UserUseCases.getOneUser({ _id });
            res.status(200).send(user);
        }
        catch (error) {
            logger_1.default.error({
                component: "UserService",
                func: "getOneUserHandler",
                additionalInfo: error,
            });
            next(error);
        }
    });
}
exports.getOneUserHandler = getOneUserHandler;
function getAllUserHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield UserUseCases.getAllUsers();
            res.status(200).send(users);
        }
        catch (error) {
            logger_1.default.error({
                component: "UserService",
                func: "getAllUserHandler",
                additionalInfo: error,
            });
            next(error);
        }
    });
}
exports.getAllUserHandler = getAllUserHandler;
function updateOneUserHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            validation_1.UserValidation.instance.updateOneUserValidation(req.body);
            const user = yield UserUseCases.updateOneUser(req.body);
            res.status(200).send(user);
        }
        catch (error) {
            logger_1.default.error({
                component: "UserService",
                func: "putOneUserHandler",
                additionalInfo: error,
            });
            next(error);
        }
    });
}
exports.updateOneUserHandler = updateOneUserHandler;

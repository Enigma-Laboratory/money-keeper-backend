"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const joi_1 = __importDefault(require("joi"));
class AuthValidation {
    static get instance() {
        if (!AuthValidation._instance) {
            AuthValidation._instance = new AuthValidation();
        }
        return AuthValidation._instance;
    }
    signInValidate(params) {
        const schema = joi_1.default.object({
            email: joi_1.default.string().email().required(),
            password: joi_1.default.string().required(),
        });
        return schema.validate(params);
    }
    signUpValidate(params) {
        const schema = joi_1.default.object({
            name: joi_1.default.string().required(),
            email: joi_1.default.string().email().required(),
            password: joi_1.default.string().required(),
        });
        return schema.validate(params);
    }
}
exports.AuthValidation = AuthValidation;

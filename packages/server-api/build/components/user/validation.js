"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const shared_1 = require("@enigma-laboratory/shared");
const joi_1 = __importDefault(require("joi"));
class UserValidation {
    static get instance() {
        if (!UserValidation._instance) {
            UserValidation._instance = new UserValidation();
        }
        return UserValidation._instance;
    }
    getOneUserValidate(params) {
        const schema = joi_1.default.object({
            id: joi_1.default.string().required(),
        });
        return schema.validate(params);
    }
    updateOneUserValidation(params) {
        const schema = joi_1.default.object({
            id: joi_1.default.string().required(),
            name: joi_1.default.string().required(),
        });
        const validate = schema.validate(params);
        if (validate.error)
            throw new shared_1.BadRequestError(validate.error.message);
    }
}
exports.UserValidation = UserValidation;

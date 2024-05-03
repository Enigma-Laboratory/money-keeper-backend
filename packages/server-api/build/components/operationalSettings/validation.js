"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationalSettingValidation = void 0;
const joi_1 = __importDefault(require("joi"));
class OperationalSettingValidation {
    static get instance() {
        if (!OperationalSettingValidation._instance) {
            this._instance = new OperationalSettingValidation();
        }
        return this._instance;
    }
    postAllGroupValidate(params) {
        const schema = joi_1.default.object({
            group: joi_1.default.string().required(),
        });
        return schema.validate(params);
    }
    putOperationalSettingValidate(params) {
        const schema = joi_1.default.object({
            _id: joi_1.default.string().required(),
            status: joi_1.default.string().valid("opening", "closed").required(),
        });
        return schema.validate(params);
    }
}
exports.OperationalSettingValidation = OperationalSettingValidation;

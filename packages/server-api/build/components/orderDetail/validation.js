"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailValidation = void 0;
const joi_1 = __importDefault(require("joi"));
class OrderDetailValidation {
    static get instance() {
        if (!OrderDetailValidation._instance) {
            this._instance = new this();
        }
        return this._instance;
    }
    createOrderDetail(params) {
        const schema = joi_1.default.object({
            orderId: joi_1.default.string().required(),
            name: joi_1.default.string().required(),
            description: joi_1.default.string(),
            price: joi_1.default.number().required(),
        });
        return schema.validate(params);
    }
    updateOneOrderDetail(params) {
        const schema = joi_1.default.object({
            id: joi_1.default.string().required(),
            name: joi_1.default.string(),
            description: joi_1.default.string(),
            price: joi_1.default.number(),
        });
        return schema.validate(params);
    }
    getOneOrderDetailValidate(params) {
        const schema = joi_1.default.object({
            id: joi_1.default.string().required(),
        });
        return schema.validate(params);
    }
    deleteOneOrderDetail(params) {
        const schema = joi_1.default.object({
            id: joi_1.default.string(),
        });
        return schema.validate(params);
    }
}
exports.OrderDetailValidation = OrderDetailValidation;

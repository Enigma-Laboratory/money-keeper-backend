"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidation = void 0;
const joi_1 = __importDefault(require("joi"));
class OrderValidation {
    static get instance() {
        if (!OrderValidation._instance) {
            this._instance = new OrderValidation();
        }
        return this._instance;
    }
    getOneOrderValidate(params) {
        const schema = joi_1.default.object({
            _id: joi_1.default.string().required(),
        });
        return schema.validate(params);
    }
    getAllOrderValidate(params) {
        const schema = joi_1.default.object({
            scope: joi_1.default.string(),
            sorters: joi_1.default.array().items(joi_1.default.string()),
            page: joi_1.default.number(),
            pageSize: joi_1.default.number(),
            startDate: joi_1.default.date(),
            endDate: joi_1.default.date(),
            month: joi_1.default.number(),
            group: joi_1.default.string(),
        });
        return schema.validate(params);
    }
    getAllOrderDetailByOrderIdValidate(params) {
        const schema = joi_1.default.object({
            orderId: joi_1.default.string().required(),
        });
        return schema.validate(params);
    }
    createOneOrderValidate(params) {
        const schema = joi_1.default.object({
            name: joi_1.default.string().required(),
            userId: joi_1.default.string().required(),
            createdOrderAt: joi_1.default.date().required(),
            status: joi_1.default.string().optional(),
            amount: joi_1.default.number().required(),
            products: joi_1.default.array().items(joi_1.default.object()).optional(),
            user: joi_1.default.object().optional(),
            event: joi_1.default.array().items(joi_1.default.object()).optional(),
            groupId: joi_1.default.string().required(),
        });
        return schema.validate(params);
    }
    updateOneOrderValidate(params) {
        const schema = joi_1.default.object({
            _id: joi_1.default.string().required(),
            name: joi_1.default.string().required(),
            userId: joi_1.default.string().required(),
            createdAt: joi_1.default.date().optional(),
            updatedAt: joi_1.default.date().optional(),
            createdOrderAt: joi_1.default.date().required(),
            status: joi_1.default.string().optional(),
            amount: joi_1.default.number().required(),
            products: joi_1.default.array().items(joi_1.default.object()).optional(),
            user: joi_1.default.object().optional(),
            event: joi_1.default.array().items(joi_1.default.object()).optional(),
            groupId: joi_1.default.string().optional(),
        });
        return schema.validate(params);
    }
    updateOrderEvent(params) {
        const schema = joi_1.default.object({
            date: joi_1.default.date().optional(),
            status: joi_1.default.string().required(),
            orderId: joi_1.default.string().required(),
        });
        return schema.validate(params);
    }
    deleteOneOrderValidate(params) {
        const schema = joi_1.default.object({
            _id: joi_1.default.string().required(),
        });
        return schema.validate(params);
    }
}
exports.OrderValidation = OrderValidation;

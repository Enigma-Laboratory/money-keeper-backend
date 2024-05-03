"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidation = void 0;
const joi_1 = __importDefault(require("joi"));
class ProductValidation {
    static get instance() {
        if (!ProductValidation._instance) {
            this._instance = new ProductValidation();
        }
        return this._instance;
    }
    postCreateProductValidate(params) {
        const schema = joi_1.default.object({
            name: joi_1.default.string().required(),
            title: joi_1.default.string().required(),
            description: joi_1.default.string().required(),
            image: joi_1.default.string().required(),
        });
        return schema.validate(params);
    }
    getOneProductValidate(params) {
        const schema = joi_1.default.object({
            id: joi_1.default.string().required(),
        });
        return schema.validate(params);
    }
    getAllProductValidate(params) {
        const schema = joi_1.default.object({
            scope: joi_1.default.string(),
            page: joi_1.default.number(),
            pageSize: joi_1.default.number(),
            sorters: joi_1.default.array().items(joi_1.default.string()),
        });
        return schema.validate(params);
    }
}
exports.ProductValidation = ProductValidation;

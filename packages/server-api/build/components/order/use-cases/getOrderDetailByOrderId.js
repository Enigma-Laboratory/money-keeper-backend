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
exports.getOrderDetailByOrderId = void 0;
const order_detail_model_1 = __importDefault(require("@/models/order.detail.model"));
const transformedData_1 = require("@/shared/transformedData");
const shared_1 = require("@enigma-laboratory/shared");
const validation_1 = require("../validation");
function getOrderDetailByOrderId(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const validate = validation_1.OrderValidation.instance.getAllOrderDetailByOrderIdValidate(params);
            if (validate.error)
                throw new shared_1.BadRequestError(validate.error.message);
            const orderDetail = yield order_detail_model_1.default.find(params).lean().exec();
            const x = orderDetail.map((_) => (0, transformedData_1.removeFieldsNotUse)(_));
            return {
                count: orderDetail.length,
                rows: x,
            };
        }
        catch (error) {
            throw new shared_1.ConflictError(error.message);
        }
    });
}
exports.getOrderDetailByOrderId = getOrderDetailByOrderId;

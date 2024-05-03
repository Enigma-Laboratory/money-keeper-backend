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
exports.deleteOneOrderDetail = void 0;
const order_detail_model_1 = __importDefault(require("@/models/order.detail.model"));
const shared_1 = require("@enigma-laboratory/shared");
const validation_1 = require("../validation");
function deleteOneOrderDetail(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const validate = validation_1.OrderDetailValidation.instance.deleteOneOrderDetail(params);
            if (validate.error)
                throw new shared_1.BadRequestError(validate.error.message);
            const deleted = yield order_detail_model_1.default.deleteOne(params);
            return { result: deleted.deletedCount };
        }
        catch (error) {
            throw new shared_1.ConflictError(error.message);
        }
    });
}
exports.deleteOneOrderDetail = deleteOneOrderDetail;

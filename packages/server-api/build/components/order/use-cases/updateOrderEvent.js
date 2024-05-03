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
exports.updateOrderEvent = void 0;
const order_model_1 = __importDefault(require("@/models/order.model"));
const shared_1 = require("@enigma-laboratory/shared");
const validation_1 = require("../validation");
function updateOrderEvent(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Validate the input parameters
            const validationResult = validation_1.OrderValidation.instance.updateOrderEvent(params);
            if (validationResult.error) {
                throw new shared_1.BadRequestError(validationResult.error.message);
            }
            // Find the order by its ID
            const order = yield order_model_1.default.findById(params.orderId);
            if (!order || !(order === null || order === void 0 ? void 0 : order.event)) {
                return { result: 0 };
            }
            // update order status
            order.status = params.status;
            const isDoneOrder = order.event.some(({ status }) => status === params.status);
            //insert orderEvent
            !isDoneOrder &&
                order.event.push({
                    status: params.status,
                    date: params.date || new Date(),
                });
            yield order.save();
            return { result: 1 };
        }
        catch (error) {
            console.log(error);
            return { result: 0 };
        }
    });
}
exports.updateOrderEvent = updateOrderEvent;

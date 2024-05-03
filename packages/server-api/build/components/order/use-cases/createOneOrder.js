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
exports.postCreateOneOrder = void 0;
const operationalSetting_model_1 = __importDefault(require("@/models/operationalSetting.model"));
const order_model_1 = __importDefault(require("@/models/order.model"));
const transformedData_1 = require("@/shared/transformedData");
const shared_1 = require("@enigma-laboratory/shared");
const validation_1 = require("../validation");
function postCreateOneOrder(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const validate = validation_1.OrderValidation.instance.createOneOrderValidate(params);
            if (validate.error)
                throw new shared_1.BadRequestError(validate.error.message);
            const operationalSetting = yield operationalSetting_model_1.default.findById(params.groupId);
            if ((operationalSetting === null || operationalSetting === void 0 ? void 0 : operationalSetting.status) === "closed") {
                throw new shared_1.BadRequestError(" The group name is closed");
            }
            const newEvent = Object.assign({}, (!params.event && {
                event: [
                    {
                        date: new Date(),
                        status: shared_1.OrderStatus.PENDING,
                    },
                ],
            }));
            const order = yield order_model_1.default.create(Object.assign(Object.assign({}, params), newEvent));
            if (!order)
                throw new shared_1.BadRequestError("Can not create order.");
            return (0, transformedData_1.removeFieldsNotUse)(order.toJSON());
        }
        catch (error) {
            throw new shared_1.ConflictError(error.message);
        }
    });
}
exports.postCreateOneOrder = postCreateOneOrder;

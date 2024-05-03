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
exports.updateOperationalStatus = void 0;
const shared_1 = require("@enigma-laboratory/shared");
const validation_1 = require("../validation");
const transformedData_1 = require("@/shared/transformedData");
const operationalSetting_model_1 = __importDefault(require("@/models/operationalSetting.model"));
const order_model_1 = __importDefault(require("@/models/order.model"));
function updateOperationalStatus(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const validate = validation_1.OperationalSettingValidation.instance.putOperationalSettingValidate(params);
            if (validate.error)
                throw new shared_1.BadRequestError(validate.error.message);
            const orders = yield order_model_1.default.find({ groupId: params === null || params === void 0 ? void 0 : params._id });
            if ((orders || []).some((order) => order.status !== "done")) {
                throw new shared_1.BadRequestError("The order status is not done ");
            }
            const groups = yield operationalSetting_model_1.default.findByIdAndUpdate(params._id, { status: params.status }, {
                new: true,
            }).lean();
            if (!groups)
                throw new shared_1.BadRequestError("Don't have the group updated.");
            return (0, transformedData_1.removeFieldsNotUse)(groups);
        }
        catch (error) {
            throw new shared_1.InternalServerError(error.message);
        }
    });
}
exports.updateOperationalStatus = updateOperationalStatus;

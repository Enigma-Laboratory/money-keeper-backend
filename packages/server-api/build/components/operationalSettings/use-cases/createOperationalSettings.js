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
exports.postCreateOperationalSettings = void 0;
const shared_1 = require("@enigma-laboratory/shared");
const validation_1 = require("../validation");
const transformedData_1 = require("@/shared/transformedData");
const operationalSetting_model_1 = __importDefault(require("@/models/operationalSetting.model"));
function postCreateOperationalSettings(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const validate = validation_1.OperationalSettingValidation.instance.postAllGroupValidate(params);
            if (validate.error)
                throw new shared_1.BadRequestError(validate.error.message);
            const groups = yield operationalSetting_model_1.default.find();
            if (groups.map(({ group }) => group).includes(params.group)) {
                throw new shared_1.ConflictError("group name is duplicated");
            }
            // when user create order set default status is opening
            const order = yield operationalSetting_model_1.default.create(Object.assign(Object.assign({}, params), { status: "opening" }));
            if (!order)
                throw new shared_1.BadRequestError("Can not create operational setting.");
            return (0, transformedData_1.removeFieldsNotUse)(order.toJSON());
        }
        catch (error) {
            throw new shared_1.ConflictError(error.message);
        }
    });
}
exports.postCreateOperationalSettings = postCreateOperationalSettings;

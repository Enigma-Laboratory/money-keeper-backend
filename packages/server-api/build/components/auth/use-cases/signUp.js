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
exports.signUp = void 0;
const shared_1 = require("@enigma-laboratory/shared");
const transformedData_1 = require("@/shared/transformedData");
const user_model_1 = __importDefault(require("@/models/user.model"));
const validation_1 = require("../validation");
function signUp(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const validate = validation_1.AuthValidation.instance.signUpValidate(params);
        if (validate.error)
            throw new shared_1.BadRequestError(validate.error.message);
        try {
            const user = yield user_model_1.default.create(params);
            if (!user)
                throw new shared_1.BadRequestError("Can not create user.");
            return (0, transformedData_1.removeFieldsNotUse)(user).toJSON();
        }
        catch (error) {
            throw new shared_1.ConflictError(error.message);
        }
    });
}
exports.signUp = signUp;

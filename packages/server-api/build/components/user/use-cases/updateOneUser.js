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
exports.updateOneUser = void 0;
const user_model_1 = __importDefault(require("@/models/user.model"));
const transformedData_1 = require("@/shared/transformedData");
const shared_1 = require("@enigma-laboratory/shared");
const lodash_1 = require("lodash");
function updateOneUser(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_model_1.default.findOneAndUpdate({ _id: params._id }, (0, lodash_1.omit)(params, ["id"]), { new: true });
            if (!user)
                throw new shared_1.BadRequestError("Don't have the user updated.");
            return (0, transformedData_1.removeFieldsNotUse)(user);
        }
        catch (error) {
            throw new shared_1.ConflictError(error.message);
        }
    });
}
exports.updateOneUser = updateOneUser;

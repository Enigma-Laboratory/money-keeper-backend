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
exports.validatePassword = void 0;
const user_model_1 = __importDefault(require("@/models/user.model"));
const shared_1 = require("@enigma-laboratory/shared");
const lodash_1 = require("lodash");
function validatePassword(_a) {
    return __awaiter(this, arguments, void 0, function* ({ email, password, }) {
        try {
            const user = yield user_model_1.default.findOne({ email });
            if (!user)
                return false;
            const isValid = yield user.comparePassword(password);
            if (!isValid)
                return false;
            return (0, lodash_1.omit)(user.toJSON(), "password");
        }
        catch (error) {
            throw new shared_1.ConflictError(error.message);
        }
    });
}
exports.validatePassword = validatePassword;

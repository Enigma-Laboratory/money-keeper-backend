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
exports.signIn = void 0;
const user_model_1 = __importDefault(require("@/models/user.model"));
const validation_1 = require("../validation");
const shared_1 = require("@enigma-laboratory/shared");
const jwtServices_1 = __importDefault(require("@/services/jwtServices"));
const configServices_1 = __importDefault(require("@/services/configServices"));
function signIn(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const validate = validation_1.AuthValidation.instance.signInValidate(params);
            if (validate.error)
                throw new shared_1.BadRequestError(validate.error.message);
            const user = yield user_model_1.default.findOne({ email: params.email });
            if (!user)
                throw new shared_1.BadRequestError("Invalid email.");
            const isValid = yield user.comparePassword(params.password);
            if (!isValid)
                throw new shared_1.BadRequestError("Wrong password.");
            return jwtServices_1.default.signJwt({ user: user }, configServices_1.default.instance.accessTokenSecret, {
                expiresIn: configServices_1.default.instance.accessTokenTtl,
                algorithm: "HS256",
            });
        }
        catch (error) {
            throw new shared_1.ConflictError(error.message);
        }
    });
}
exports.signIn = signIn;

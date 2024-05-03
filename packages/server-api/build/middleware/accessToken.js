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
exports.accessToken = void 0;
const shared_1 = require("@/components/user/shared");
const configServices_1 = __importDefault(require("@/services/configServices"));
const jwtServices_1 = __importDefault(require("@/services/jwtServices"));
const shared_2 = require("@enigma-laboratory/shared");
const lodash_1 = require("lodash");
const accessToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const accessToken = (0, lodash_1.get)(req, "headers.authorization", "").replace(/^Bearer\s/, "");
    try {
        return next();
        if (req.url.includes("sign-in") || req.url.includes("sign-up"))
            return next();
        if (!accessToken)
            throw new shared_2.UnauthorizedError("accessToken not exist.");
        const { decoded, expired } = jwtServices_1.default.verifyJwt(accessToken, configServices_1.default.instance.accessTokenSecret);
        if (!decoded || expired)
            throw new shared_2.UnauthorizedError("accessToken is expired.");
        if (decoded) {
            const { user } = decoded;
            req.actor = yield validateToken(user === null || user === void 0 ? void 0 : user.id);
            return next();
        }
    }
    catch (error) {
        next(error);
    }
});
exports.accessToken = accessToken;
const validateToken = (decodedToken) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, shared_1.validateUserExistById)(decodedToken);
        return user;
    }
    catch (error) {
        throw new shared_2.UnauthorizedError("Unauthorized validate token");
    }
});

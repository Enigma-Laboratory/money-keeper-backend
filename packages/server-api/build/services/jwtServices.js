"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Jwt {
    static signJwt(object, keyName, options) {
        const token = jsonwebtoken_1.default.sign(object, keyName, Object.assign({}, (options && options)));
        return token;
    }
    static verifyJwt(token, keyName, options) {
        try {
            const decoded = jsonwebtoken_1.default.verify(token, keyName, Object.assign({}, (options && options)));
            return {
                valid: true,
                expired: false,
                decoded,
            };
        }
        catch (e) {
            console.error(e);
            return {
                valid: false,
                expired: e.message === "jwt expired",
                decoded: null,
            };
        }
    }
}
exports.default = Jwt;

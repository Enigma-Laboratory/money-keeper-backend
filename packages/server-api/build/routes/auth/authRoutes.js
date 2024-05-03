"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthComponent = __importStar(require("@/components/auth"));
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
/**
 * post /sign in
 * @summary create token for the user
 *
 * @tags user
 *
 * @security BearerAuth
 *
 * @param {User} userModel and unique email
 **
 * @return {Token} 200 - Return token - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.post("/sign-in", AuthComponent.signInHandler);
/**
 * post /sign up
 * @summary sign up
 *
 * @tags user
 *
 * @security BearerAuth
 *
 * @param {CreateUserParams}  unique email
 **
 * @return {User} 200 - Return the registered user - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.post("/sign-up", AuthComponent.signUpHandler);
exports.default = route;

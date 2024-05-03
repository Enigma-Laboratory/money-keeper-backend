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
const OperationalSettingComponent = __importStar(require("@/components/operationalSettings"));
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
/**
 * post /OperationalSettings
 * @summary post one operational setting
 *
 * @tags OperationalSettings
 *
 * @security BearerAuth
 *
 **
 * @return {OperationalSetting} 200 - Return operational setting by id - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.post("/", OperationalSettingComponent.createOneOperationalSettingHandler);
/**
 * get /OperationalSettings
 * @summary Get list of all operational setting
 *
 * @tags OperationalSettings
 *
 * @security BearerAuth
 *
 **
 * @return {OperationalSettings} 200 - Return operational setting - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.get("/", OperationalSettingComponent.getAllOperationalSettingHandler);
/**
 * put /OperationalSettings
 * @summary update operational setting
 *
 * @tags OperationalSettings
 *
 * @security BearerAuth
 *
 **
 * @return {OperationalSettings} 200 - Return operational setting - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.put("/", OperationalSettingComponent.updateOperationalStatusHandler);
exports.default = route;

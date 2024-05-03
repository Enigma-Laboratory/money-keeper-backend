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
const OrderComponent = __importStar(require("@/components/order"));
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
/**
 * get /order/{id}/details
 * @summary get all order detail by order id
 *
 * @tags Order
 *
 * @security BearerAuth
 **
 * @return {FindAllOrderDetailByOrderIdResponse} 200 - Return list of order details by id - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.get("/:id/details", OrderComponent.getOrderDetailByOrderIdHandler);
/**
 * get /order/{id}
 * @summary get one order
 *
 * @tags Order
 *
 * @security BearerAuth
 *
 * @param {string} id - The unique id of order
 **
 * @return {Order} 200 - Return order by id - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.get("/:id", OrderComponent.getOneOrderHandler);
/**
 * put /order
 * @summary update one order
 *
 * @tags Order
 *
 * @security BearerAuth
 *
 * @param {Order}
 **
 * @return {Order} 200 - Return order when deleted - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.put("/", OrderComponent.updateOneOrderHandler);
/**
 * put /order
 * @summary update one order event
 *
 * @tags OrderEvent
 *
 * @security BearerAuth
 *
 * @param {OrderEvent}
 **
 * @return {Result} 200 - Return order when deleted - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.put("/order-event", OrderComponent.updateOrderEventHandler);
/**
 * delete /orders/:id
 * @summary delete one order
 *
 * @tags Order
 *
 * @security BearerAuth
 *
 * @param {Order}
 **
 * @return {Order} 200 - Return order when deleted - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.delete("/", OrderComponent.deleteOneOrderHandler);
/**
 * post /order
 * @summary get one order
 *
 * @tags Order
 *
 * @security BearerAuth
 *
 **
 * @return {Order} 200 - Return order by id - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.post("/", OrderComponent.createOneOrderHandler);
/**
 * get /order
 * @summary Get list of all orders
 *
 * @tags Order
 *
 * @security BearerAuth
 *
 **
 * @return {Order} 200 - Return order - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.get("/", OrderComponent.getAllOrderHandler);
exports.default = route;

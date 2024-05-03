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
exports.updateOrderEventHandler = exports.updateOneOrderHandler = exports.deleteOneOrderHandler = exports.getOrderDetailByOrderIdHandler = exports.getOneOrderHandler = exports.getAllOrderHandler = exports.createOneOrderHandler = void 0;
const logger_1 = __importDefault(require("@/utils/logger"));
const OrderUseCases = __importStar(require("./use-cases"));
function createOneOrderHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const order = yield OrderUseCases.postCreateOneOrder(req.body);
            logger_1.default.info({
                component: "OrderService",
                func: "postCreateOneOrderHandler",
                additionalInfo: order,
            });
            res.status(200).send(order);
        }
        catch (error) {
            logger_1.default.error({
                component: "OrderService",
                func: "postCreateOneOrderHandler",
                additionalInfo: error,
            });
            next(error);
        }
    });
}
exports.createOneOrderHandler = createOneOrderHandler;
function getAllOrderHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const orders = yield OrderUseCases.getAllOrders(req.params);
            res.status(200).send(orders);
        }
        catch (error) {
            logger_1.default.error({
                component: "OrderService",
                func: "getAllOrderHandler",
                additionalInfo: error,
            });
            next(error);
        }
    });
}
exports.getAllOrderHandler = getAllOrderHandler;
function getOneOrderHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const _id = req.url.replace("/", "");
        try {
            const order = yield OrderUseCases.getOneOrder({ _id });
            logger_1.default.info({
                component: "OrderService",
                func: "getOneOrderHandler",
                additionalInfo: order,
            });
            res.status(200).send(order);
        }
        catch (error) {
            logger_1.default.error({
                component: "OrderService",
                func: "getOneOrderHandler",
                additionalInfo: error,
            });
            next(error);
        }
    });
}
exports.getOneOrderHandler = getOneOrderHandler;
function getOrderDetailByOrderIdHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.url.replace("/details", "").replace("/", "");
        try {
            const orderDetail = yield OrderUseCases.getOrderDetailByOrderId({
                orderId: id,
            });
            logger_1.default.info({
                component: "OrderService",
                func: "getOneOrderHandler",
                additionalInfo: orderDetail,
            });
            res.status(200).send(orderDetail);
        }
        catch (error) {
            logger_1.default.error({
                component: "OrderService",
                func: "getOneOrderHandler",
                additionalInfo: error,
            });
            next(error);
        }
    });
}
exports.getOrderDetailByOrderIdHandler = getOrderDetailByOrderIdHandler;
function deleteOneOrderHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deleteOrder = yield OrderUseCases.deleteOneOrder(req.body);
            logger_1.default.info({
                component: "OrderService",
                func: "deleteOneOrderHandler",
                additionalInfo: deleteOrder,
            });
            res.status(200).send(deleteOrder);
        }
        catch (error) {
            logger_1.default.error({
                component: "OrderService",
                func: "deleteOneOrderHandler",
                additionalInfo: error,
            });
            next(error);
        }
    });
}
exports.deleteOneOrderHandler = deleteOneOrderHandler;
function updateOneOrderHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const order = yield OrderUseCases.updateOneOrder(req.body);
            logger_1.default.info({
                component: "OrderService",
                func: "putOneOrderHandler",
                additionalInfo: order,
            });
            res.status(200).send(order);
        }
        catch (error) {
            logger_1.default.error({
                component: "OrderService",
                func: "putOneOrderHandler",
                additionalInfo: error,
            });
            next(error);
        }
    });
}
exports.updateOneOrderHandler = updateOneOrderHandler;
function updateOrderEventHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const order = yield OrderUseCases.updateOrderEvent(req.body);
            logger_1.default.info({
                component: "OrderService",
                func: "updateOrderEventHandler",
                additionalInfo: order,
            });
            res.status(200).send(order);
        }
        catch (error) {
            logger_1.default.error({
                component: "OrderService",
                func: "updateOrderEventHandler",
                additionalInfo: error,
            });
            next(error);
        }
    });
}
exports.updateOrderEventHandler = updateOrderEventHandler;

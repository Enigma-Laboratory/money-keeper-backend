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
exports.deleteOneOrderDetailHandler = exports.updateOrderDetailHandler = exports.createOneOrderDetailHandler = exports.getOneOrderDetailHandler = exports.getAllOrderDetailHandler = void 0;
const logger_1 = __importDefault(require("@/utils/logger"));
const OrderDetailUseCases = __importStar(require("./use-cases"));
function getAllOrderDetailHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const OrderDetail = yield OrderDetailUseCases.getAllOrderDetail(req.params);
            res.send(OrderDetail);
        }
        catch (error) {
            logger_1.default.error({
                component: "OrderDetailService",
                func: "getAllOrderDetailHandler",
                additionalInfo: error,
            });
            next(error);
        }
    });
}
exports.getAllOrderDetailHandler = getAllOrderDetailHandler;
function getOneOrderDetailHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const orderDetail = yield OrderDetailUseCases.deleteOneOrderDetail(req.params);
            res.status(200).send(orderDetail);
        }
        catch (error) {
            logger_1.default.error({
                component: "OrderDetailService",
                func: "getOneOrderDetailHandler",
                additionalInfo: error,
            });
            next(error);
        }
    });
}
exports.getOneOrderDetailHandler = getOneOrderDetailHandler;
function createOneOrderDetailHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const orderDetail = yield OrderDetailUseCases.createOrderDetail(req.body);
            res.status(200).send(orderDetail);
        }
        catch (error) {
            logger_1.default.error({
                component: "OrderDetailService",
                func: "createOneOrderDetailHandler",
                additionalInfo: error,
            });
            next(error);
        }
    });
}
exports.createOneOrderDetailHandler = createOneOrderDetailHandler;
function updateOrderDetailHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const orderDetail = yield OrderDetailUseCases.updateOneOrderDetail(req.body);
            res.status(200).send(orderDetail);
        }
        catch (error) {
            logger_1.default.error({
                component: "OrderDetailService",
                func: "updateOrderDetailHandler",
                additionalInfo: error,
            });
            next(error);
        }
    });
}
exports.updateOrderDetailHandler = updateOrderDetailHandler;
function deleteOneOrderDetailHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const orderDetail = yield OrderDetailUseCases.deleteOneOrderDetail(req.params);
            res.status(200).send(orderDetail);
        }
        catch (error) {
            logger_1.default.error({
                component: "OrderDetailService",
                func: "deleteOneOrderDetailHandler",
                additionalInfo: error,
            });
            next(error);
        }
    });
}
exports.deleteOneOrderDetailHandler = deleteOneOrderDetailHandler;

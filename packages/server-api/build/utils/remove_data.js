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
const order_detail_model_1 = __importDefault(require("@/models/order.detail.model"));
const order_model_1 = __importDefault(require("@/models/order.model"));
const user_model_1 = __importDefault(require("@/models/user.model"));
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
route.delete("/users", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.deleteMany({});
        res.status(200).send(user);
    }
    catch (e) {
        next(e);
    }
}));
route.delete("/orders", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield order_detail_model_1.default.deleteMany({});
        res.status(200).send(user);
    }
    catch (e) {
        next(e);
    }
}));
route.delete("/order-details", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield order_model_1.default.deleteMany({});
        res.status(200).send(user);
    }
    catch (e) {
        next(e);
    }
}));
exports.default = route;

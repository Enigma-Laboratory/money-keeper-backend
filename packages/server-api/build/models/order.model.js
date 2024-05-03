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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const product_model_1 = require("./product.model");
const orderEventSchema = new mongoose_1.Schema({
    date: { type: Date, required: true },
    status: { type: String, required: true },
});
const orderSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    userId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    createdOrderAt: { type: Date, required: true },
    status: { type: String, required: true },
    amount: { type: Number, required: true },
    products: [product_model_1.productSchema], // Reference to Product documents
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" }, // Reference to User document
    event: [orderEventSchema], // Embedded array of OrderEvent documents
    orderNumber: { type: Number }, // Order number
    groupId: { type: String, required: true },
});
orderSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.orderNumber) {
            const latestOrder = yield OrderModel.findOne({}, {}, { sort: { createdAt: -1 } }); // Get the latest order
            const orderNumber = latestOrder ? latestOrder.orderNumber + 1 : 1; // Increment the order number
            this.orderNumber = orderNumber;
        }
        next();
    });
});
const OrderModel = (0, mongoose_1.model)("Order", orderSchema);
exports.default = OrderModel;

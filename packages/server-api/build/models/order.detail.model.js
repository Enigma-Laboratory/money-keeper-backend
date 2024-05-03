"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderDetailSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        default: () => new mongoose_1.Types.ObjectId().toString(),
    },
    orderId: { type: mongoose_1.Types.ObjectId, required: true, ref: "Order" },
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    userIds: [{ type: mongoose_1.Types.ObjectId, required: true, ref: "User" }],
    mode: {
        type: String,
        enum: ["default", "customized"],
        default: "default",
    },
}, {
    timestamps: true,
    primaryKey: "id",
});
const OrderDetailModel = (0, mongoose_1.model)("OrderDetail", orderDetailSchema);
exports.default = OrderDetailModel;

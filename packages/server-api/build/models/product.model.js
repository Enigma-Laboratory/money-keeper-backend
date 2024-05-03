"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const mongoose_1 = require("mongoose");
exports.productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    isActive: { type: Boolean, default: true },
    userIds: { type: [String], required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String },
    note: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}, {
    timestamps: true,
});
const ProductModel = (0, mongoose_1.model)("Product", exports.productSchema);
exports.default = ProductModel;

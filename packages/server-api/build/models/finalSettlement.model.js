"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FinalSettlementModel = new mongoose_1.Schema({
    operationalSettingId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "OperationalSetting",
        required: true,
    },
    orderIds: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Order" }],
}, { timestamps: true });
exports.default = FinalSettlementModel;

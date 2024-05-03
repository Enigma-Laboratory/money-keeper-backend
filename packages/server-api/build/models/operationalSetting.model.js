"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operationalSettingSchema = void 0;
const mongoose_1 = require("mongoose");
exports.operationalSettingSchema = new mongoose_1.Schema({
    group: { type: String, required: true },
    status: { type: String, required: true, enum: ["opening", "closed"] },
}, {
    timestamps: true,
});
const OperationalSettingModel = (0, mongoose_1.model)("Operational_settings", exports.operationalSettingSchema);
exports.default = OperationalSettingModel;

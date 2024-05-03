"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AdditionalHttpStatusCodes = (err, req, res, next) => {
    try {
        res.status(err.status).json(err.toObject());
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error." });
    }
};
exports.default = AdditionalHttpStatusCodes;

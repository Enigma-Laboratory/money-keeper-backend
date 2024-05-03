"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
const whitelist = ["http://localhost:3000"];
const corsOptions = (req, callback) => {
    const origin = req.headers.origin;
    const isAllowedOrigin = whitelist.includes(origin);
    callback(null, { origin: isAllowedOrigin });
};
exports.corsOptions = corsOptions;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Config {
    static get instance() {
        if (!Config._instance) {
            Config._instance = new Config();
        }
        return Config._instance;
    }
    constructor() {
        this.accessTokenTtl = process.env.ACCESS_TOKEN_TTL || "30d";
        this.accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || "1y";
        this.refreshTokenTtl = process.env.REFRESH_TOKEN_TTL || "1y";
        this.port = process.env.PORT || "1337";
        this.saltWorkFactor = Number(process.env.SALT_WORK_FACTOR) || 1;
        this.dbUri = process.env.DB_URI || "";
    }
}
exports.default = Config;

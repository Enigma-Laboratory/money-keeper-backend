"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const accessToken_1 = require("@/middleware/accessToken");
const apiDocsServices_1 = __importDefault(require("@/services/apiDocsServices/apiDocsServices"));
const authRoutes_1 = __importDefault(require("./auth/authRoutes"));
const orderRoutes_1 = __importDefault(require("./order/orderRoutes"));
const orderDetailRoutes_1 = __importDefault(require("./orderDetail/orderDetailRoutes"));
const productRoutes_1 = __importDefault(require("./product/productRoutes"));
const serverError_1 = __importDefault(require("./serverError/serverError"));
const userRoutes_1 = __importDefault(require("./user/userRoutes"));
const operationalSettingRoutes_1 = __importDefault(require("./operationalSetting/operationalSettingRoutes"));
// import RemoveRoute from '@/utils/remove_data';
function routes(app) {
    app.use("/api-docs", apiDocsServices_1.default.instance.serveAndSetup());
    app.use("/auth", accessToken_1.accessToken, authRoutes_1.default);
    app.use("/products", accessToken_1.accessToken, productRoutes_1.default);
    app.use("/orders", accessToken_1.accessToken, orderRoutes_1.default);
    app.use("/order-details", accessToken_1.accessToken, orderDetailRoutes_1.default);
    app.use("/users", accessToken_1.accessToken, userRoutes_1.default);
    app.use("/operational-settings", accessToken_1.accessToken, operationalSettingRoutes_1.default);
    // app.use('/remove', accessToken, RemoveRoute); // remove all datas for each table.
    app.use(serverError_1.default);
}
exports.default = routes;

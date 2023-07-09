import { Express } from "express";
import AuthRoute from "./auth.route";
import SessionRoute from "./session.route";
import ProductRoute from "./product.route";

function routes(app: Express) {
  app.use("/auth", AuthRoute);
  app.use("/session", SessionRoute);
  app.use("/product/", ProductRoute);
}

export default routes;

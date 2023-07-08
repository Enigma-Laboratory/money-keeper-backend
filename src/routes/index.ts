import { Express } from "express";
import AuthRoute from "./auth.route";
import SessionRoute from "./session.route";

function routes(app: Express) {
  app.use("/auth", AuthRoute);
  app.use("/session", SessionRoute);
}

export default routes;

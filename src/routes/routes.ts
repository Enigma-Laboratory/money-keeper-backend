import { Express, Request, Response } from "express";
import {
  createUserHandler,
  getAllUsesHandler,
  getOneUserHandler,
} from "../controllers/user.controller";
import validateResource from "../middleware/validateResource";
import { createUserSchema } from "../schemas/user.schemas";
import {
  createUserSessionHandler,
  getUserSessionsHandler,
} from "../controllers/session.controller";
import { createSessionSchema } from "../schemas/session.schemas";
import requireUser from "../middleware/requireUser";

function routes(app: Express) {
  app.get("/healthyCheck", (rep: Request, res: Response) => {
    res.sendStatus(200);
  });
  app.post(
    "/api/create-user",
    validateResource(createUserSchema),
    createUserHandler
  );
  app.get("/api/user/:email", getOneUserHandler);
  app.get("/api/users", getAllUsesHandler);
  app.post(
    "/api/sessions",
    validateResource(createSessionSchema),
    createUserSessionHandler
  );
  app.get("/api/sessions", requireUser, getUserSessionsHandler);
}

export default routes;

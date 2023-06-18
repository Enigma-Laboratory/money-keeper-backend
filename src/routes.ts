import { Express, Request, Response } from "express";

function routes(app: Express) {
  app.get("/healthyCheck", (rep: Request, res: Response) => {
    res.sendStatus(200);
  });
}

export default routes;

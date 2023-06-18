import { Request, Response } from "express";
import { createSession } from "../services/session.service";
import { validatePassword } from "../services/user.service";

export async function createSessionHandler(req: Request, res: Response) {
  try {
    const user = await validatePassword(req.body);
    if (!user) {
      return res.status(401).send("Invalid email or password");
    }
    const session = await createSession(user._id, req.get("user-agent") || "");
  } catch (e: any) {
    res.status(409).send(e.message);
  }
}

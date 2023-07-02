import { Request, Response } from "express";
import { createSession, findSessions } from "../services/session.service";
import { validatePassword } from "../services/user.service";
import { signJwt } from "../utils/jwt";
import config from "config";

export async function createUserSessionHandler(req: Request, res: Response) {
  try {
    const user = await validatePassword(req.body);
    if (!user) {
      return res.status(401).send("Invalid email or password");
    }
    const session = await createSession(user._id, req.get("user-agent") || "");

    const accessToken = signJwt(
      { ...user, session: session._id },
      "accessTokenPrivateKey",
      { expiresIn: config.get("accessTokenTtl") }
    );

    const refreshToken = signJwt(
      { ...user, session: session._id },
      "refreshTokenPrivateKey",
      { expiresIn: config.get("refreshTokenTtl") }
    );

    return res.send({ accessToken, refreshToken });
  } catch (e: any) {
    res.status(409).send(e.message);
  }
}

export async function getUserSessionsHandler(req: Request, res: Response) {
  const userId = res.locals.user._id;

  const sessions = await findSessions({ user: userId, valid: true });

  return res.send(sessions);
}

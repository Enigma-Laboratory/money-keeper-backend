import { Request, Response } from "express";
import { nanoid } from "nanoid";
import config from "config";
import { validatePassword } from "../auth/use-cases/validatePassword";
import * as SessionUseCases from "./use-cases";
import { signJwt } from "../../utils/jwt";

export async function createUserSessionHandler(req: Request, res: Response) {
  try {
    const user = await validatePassword(req.body);
    if (!user) {
      return res.status(401).send("Invalid email or password");
    }
    const session = await SessionUseCases.createSession(
      user._id,
      req.get("user-agent") || ""
    );

    const accessToken = signJwt(
      { session: session._id },
      "accessTokenPrivateKey",
      { expiresIn: config.get<string>("accessTokenTtl"), algorithm: "HS256" }
    );

    const refreshToken = signJwt(
      { ...user, session: session._id },
      "refreshTokenPrivateKey",
      { expiresIn: config.get<string>("refreshTokenTtl") }
    );

    return res.send({ accessToken, refreshToken });
  } catch (e: any) {
    res.status(409).send(e.message);
  }
}

export async function getUserSessionsHandler(req: Request, res: Response) {
  const userId = res.locals.user._id;
  console.log("nanoid: ", nanoid());
  const sessions = await SessionUseCases.findSessions({
    user: userId,
    valid: true,
  });

  return res.send(sessions);
}

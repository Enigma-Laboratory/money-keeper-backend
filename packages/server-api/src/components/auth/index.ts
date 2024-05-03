import { NextFunction, Response, Request } from "express";
import logger from "@/utils/logger";
import * as AuthUseCases from "./use-cases";

export interface RequestWithUser extends Request {
  actor?: object | string;
}

export async function signInHandler(
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const token = await AuthUseCases.signIn(req.body);
    res.status(200).json({ token });
  } catch (error) {
    logger.error({
      component: "AuthService",
      func: "postSignInHandler",
      additionalInfo: error,
    });
    return next(error);
  }
}

export async function signUpHandler(
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const user = await AuthUseCases.signUp(req.body);
    res.status(200).send(user);
  } catch (error) {
    logger.error({
      component: "AuthService",
      func: "postSignUpHandler",
      additionalInfo: error,
    });
    return next(error);
  }
}

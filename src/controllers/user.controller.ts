import { Request, Response } from "express";
import logger from "../utils/logger";
import { createUser, getAllUsers, getOneUser } from "../services/user.service";
import { CreateUserInput } from "../schemas/user.schemas";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    logger.info(`create new user success ${user} `);
    return res.send(user);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function getOneUserHandler(req: Request, res: Response) {
  try {
    const user = await getOneUser(req.params.email);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.send(user);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function getAllUsesHandler(req: Request, res: Response) {
  try {
    const users = await getAllUsers();
    return res.send(users);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

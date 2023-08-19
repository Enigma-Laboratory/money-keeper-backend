import { NextFunction, Request, Response } from 'express';
import * as AuthUseCases from './use-cases';

export async function getOneUserHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  const user = await AuthUseCases.getOneUser(req.params);
  res.status(200).send(user);
}

export async function getAllUsesHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  const users = await AuthUseCases.getAllUsers();
  res.status(200).send(users);
}

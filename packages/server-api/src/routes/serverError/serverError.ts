import { HttpError } from "@enigma-laboratory/shared";
import { NextFunction, Request, Response } from "express";

const AdditionalHttpStatusCodes = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(err.status).json(err.toObject());
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
  }
};

export default AdditionalHttpStatusCodes;

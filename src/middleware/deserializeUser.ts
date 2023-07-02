import { Request, Response, NextFunction } from "express";
import { get } from "lodash";
import { verifyJwt } from "../utils/jwt";

const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = get(req, "headers.authorization", "").replace(
    /^Bearer\s/,
    ""
  );
  console.log("🚀 ~ file: deserializeUser.ts:14 ~ accessToken:", accessToken);

  const refreshToken = get(req, "headers.x-refresh");
  console.log("🚀 ~ file: deserializeUser.ts:17 ~ refreshToken:", refreshToken);

  if (!accessToken) {
    return next();
  }

  const { decoded, expired } = verifyJwt(accessToken, "accessTokenPublicKey");
  console.log(decoded, expired);

  //   console.log("decoded", decoded);
  //   console.log("expired", expired);
  //   if (decoded) {
  //     res.locals.user = decoded;
  //     return next();
  //   }
  return next();
};

export default deserializeUser;

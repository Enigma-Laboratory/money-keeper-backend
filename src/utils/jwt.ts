import config from "config";
import jwt from "jsonwebtoken";

export function signJwt(
  object: Object,
  keyName: "accessTokenPrivateKey" | "refreshTokenPrivateKey",
  options?: jwt.SignOptions | undefined
) {
  const signingKey = config.get<string>(keyName);
  // Buffer.from(config.get<string>(keyName), "base64").toString("ascii");

  const token = jwt.sign(object, signingKey, {
    ...(options && options),
    algorithm: "HS256",
  });

  return token;
}

export function verifyJwt(
  token: string,
  keyName: "accessTokenPublicKey" | "refreshTokenPublicKey"
) {
  const publicKey = config.get<string>(keyName);

  // Buffer.from(config.get<string>(keyName), "base64").toString("ascii");

  try {
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e: any) {
    console.error(e);
    return {
      valid: false,
      expired: e.message === "jwt expired",
      decoded: null,
    };
  }
}

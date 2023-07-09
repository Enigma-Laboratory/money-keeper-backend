import config from "config";
import JWT from "jsonwebtoken";

export function signJwt(
  object: Object,
  keyName: "accessTokenPrivateKey" | "refreshTokenPrivateKey",
  options?: JWT.SignOptions
) {
  const signingKey = config.get<string>("accessTokenPrivateKey");
  const token = JWT.sign(object, signingKey, {
    ...(options && options),
  });

  return token;
}

export function verifyJwt(
  token: string,
  keyName: "accessTokenPublicKey" | "refreshTokenPublicKey",
  options?: JWT.SignOptions
) {
  const publicKey = config.get<string>("accessTokenPrivateKey");
  try {
    const decoded = JWT.verify(token, publicKey, { ...(options && options) });
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

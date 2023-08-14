import config from 'config';
import JWT from 'jsonwebtoken';

export function signJwt(object: Object, keyName: string, options?: JWT.SignOptions) {
  const token = JWT.sign(object, keyName, {
    ...(options && options),
  });

  return token;
}

export function verifyJwt(token: string, keyName: string, options?: JWT.SignOptions) {
  try {
    const decoded = JWT.verify(token, keyName, { ...(options && options) });
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e: any) {
    console.error(e);
    return {
      valid: false,
      expired: e.message === 'jwt expired',
      decoded: null,
    };
  }
}

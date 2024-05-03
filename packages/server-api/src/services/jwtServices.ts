import JWT, { SignOptions } from 'jsonwebtoken';
export default class Jwt {
  public static signJwt(object: Object, keyName: string, options?: SignOptions) {
    const token = JWT.sign(object, keyName, { ...(options && options) });
    return token;
  }
  public static verifyJwt(token: string, keyName: string, options?: SignOptions) {
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
}

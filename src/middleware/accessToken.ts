import { Response, NextFunction } from 'express';
import { get } from 'lodash';
import Jwt from '@/services/jwt';
import { RequestWithUser } from '@/interface';
import { JwtPayload } from 'jsonwebtoken';
import { validateUserExistById } from '@/components/user/shared';
import { User } from '@/enigma-laboratory/sdk/user';
import { UnauthorizedError } from '@/errors';

const AccessTokenSecret = process.env.ACCESS_TOKEN_SECRET || 'test';

export const accessToken = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  const accessToken = get(req, 'headers.authorization', '').replace(/^Bearer\s/, '');
  try {
    if (req.url.includes('sign-in') || req.url.includes('sign-up')) return next();
    if (!accessToken) throw new UnauthorizedError('accessToken not exist.');
    const { decoded, expired } = Jwt.verifyJwt(accessToken, AccessTokenSecret);

    if (!decoded || expired) throw new UnauthorizedError('accessToken is expired.');
    if (decoded) {
      const { user } = decoded as unknown as any;
      req.actor = await validateToken(user?.id);
      return next();
    }
  } catch (error) {
    next(error);
  }
};

const validateToken = async (decodedToken: string | JwtPayload): Promise<User> => {
  try {
    const user = await validateUserExistById(decodedToken as string);
    return user;
  } catch (error) {
    throw new UnauthorizedError('Unauthorized validate token');
  }
};

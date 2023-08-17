import { User } from '@/components/user/interface';
import { validateUserExistById } from '@/components/user/shared';
import { UnauthorizedError } from '@/errors';
import { RequestWithUser } from '@/interface';
import Jwt from '@/services/jwt';
import { NextFunction, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { get } from 'lodash';

const AccessTokenSecret = process.env.ACCESS_TOKEN_SECRET || 'test';

export const deserializeUser = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  const accessToken = get(req, 'headers.authorization', '').replace(/^Bearer\s/, '');
  try {
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

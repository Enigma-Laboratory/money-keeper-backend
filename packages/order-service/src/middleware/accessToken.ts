import { validateUserExistById } from '@/components/user/shared';
import { UnauthorizedError } from '@/errors';
import { RequestWithUser } from '@/interface';
import Config from '@/services/configServices';
import Jwt from '@/services/jwtServices';
import { User } from '@enigma-laboratory/shared';
import { NextFunction, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { get } from 'lodash';

const excludedPaths = ['sign-in', 'sign-up', 'forgot-password', 'refresh-token'];

export const accessToken = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  const accessToken = get(req, 'headers.authorization', '').replace(/^Bearer\s/, '');
  try {
    if (excludedPaths.some(path => req.url.includes(path))) return next();
    if (!accessToken) throw new UnauthorizedError('accessToken not exist.');
    const { decoded, expired } = Jwt.verifyJwt(accessToken, Config.instance.accessTokenSecret);

    if (!decoded || expired) throw new UnauthorizedError('accessToken is expired.');
    if (decoded) {
      const { user } = decoded as unknown as any;
      req.actor = await validateToken(user?._id);
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

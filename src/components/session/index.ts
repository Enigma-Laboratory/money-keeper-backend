import { Request, Response } from 'express';
import { validatePassword } from '../user/shared';
import * as SessionUseCases from './use-cases';
import { signJwt } from '@/utils/jwt';

export async function createUserSessionHandler(req: Request, res: Response) {
  const ACCESS_TOKEN_TTL = process.env.ACCESS_TOKEN_TTL || '30d';
  const REFRESH_TOKEN_TTL = process.env.REFRESH_TOKEN_TTL || '1y';
  try {
    const user = await validatePassword(req.body);
    if (!user) {
      return res.status(401).send('Invalid email or password');
    }
    const session = await SessionUseCases.createSession(user._id, req.get('user-agent') || '');

    const accessToken = signJwt({ session: session._id }, 'accessTokenPrivateKey', {
      expiresIn: ACCESS_TOKEN_TTL,
      algorithm: 'HS256',
    });

    const refreshToken = signJwt({ ...user, session: session._id }, 'refreshTokenPrivateKey', {
      expiresIn: REFRESH_TOKEN_TTL,
    });

    return res.send({ accessToken, refreshToken });
  } catch (e: any) {
    res.status(409).send(e.message);
  }
}

export async function getUserSessionsHandler(req: Request, res: Response) {
  const userId = res.locals.user._id;
  const sessions = await SessionUseCases.findSessions({
    user: userId,
    valid: true,
  });

  return res.send(sessions);
}

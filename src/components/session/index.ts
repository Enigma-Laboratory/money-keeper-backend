import { Request, Response } from 'express';
import { validatePassword } from '../user/shared';
import * as SessionUseCases from './use-cases';
import Jwt from '@/services/jwtServices';
import Config from '@/services/configServices';

export async function createUserSessionHandler(req: Request, res: Response) {
  try {
    const user = await validatePassword(req.body);
    if (!user) {
      return res.status(401).send('Invalid email or password');
    }
    const session = await SessionUseCases.createSession(user._id, req.get('user-agent') || '');

    const accessToken = Jwt.signJwt({ session: session._id }, 'accessTokenPrivateKey', {
      expiresIn: Config.instance.accessTokenTtl,
      algorithm: 'HS256',
    });

    const refreshToken = Jwt.signJwt({ ...user, session: session._id }, 'refreshTokenPrivateKey', {
      expiresIn: Config.instance.refreshTokenTtl,
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

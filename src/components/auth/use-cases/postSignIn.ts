import UserModel from '@/models/user.model';
import { AuthValidation } from '../validation';
import { BadRequestError, ConflictError } from '@/errors';
import Jwt from '@/services/jwt';
import { FindOneUserParams } from '../interfaces';

export async function postSignIn(params: FindOneUserParams): Promise<string> {
  const AccessTokenTtl = process.env.ACCESS_TOKEN_TTL || '1h';
  const AccessTokenSecret = process.env.ACCESS_TOKEN_SECRET || 'test';

  AuthValidation.instance.signInValidate(params);

  try {
    const user = await UserModel.findOne({ email: params.email });
    if (!user) throw new BadRequestError('Invalid email.');

    const isValid = await user.comparePassword(params.password);
    if (!isValid) throw new BadRequestError('Wrong password.');

    return Jwt.signJwt({ user: user }, AccessTokenSecret, {
      expiresIn: AccessTokenTtl,
      algorithm: 'HS256',
    });
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

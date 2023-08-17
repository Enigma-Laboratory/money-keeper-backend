import UserModel from '@/models/user.model';
import { AuthValidation } from '../validation';
import { BadRequestError } from '@/errors';
import { signJwt } from '@/utils/jwt';
import { FindOneUserParams } from '../interfaces';

export async function postSignIn(params: FindOneUserParams): Promise<string> {
  const AccessTokenTtl = process.env.ACCESS_TOKEN_TTL || '1h';
  const AccessTokenSecret = process.env.ACCESS_TOKEN_SECRET || 'test';

  const validate = AuthValidation.instance.signInValidate(params);
  if (validate.error) {
    throw new BadRequestError(validate.error.message);
  }
  try {
    const user = await UserModel.findOne({ email: params.email });
    if (!user) throw new BadRequestError('Invalid email');
    const isValid = await user.comparePassword(params.password);
    if (!isValid) throw new BadRequestError('Wrong password');

    return signJwt({ user: user }, AccessTokenSecret, {
      expiresIn: AccessTokenTtl,
      algorithm: 'HS256',
    });
  } catch (error) {
    throw error;
  }
}

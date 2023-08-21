import UserModel from '@/models/user.model';
import Jwt from '@/services/jwt';
import { FindOneUserParams } from '../interfaces';
import { AuthValidation } from '../validation';
import { BadRequestError } from '@/errors';
import { removeFieldsNotUse } from '@/shared/transformedData';

export async function postSignIn(params: FindOneUserParams): Promise<string> {
  const AccessTokenTtl = process.env.ACCESS_TOKEN_TTL || '1h';
  const AccessTokenSecret = process.env.ACCESS_TOKEN_SECRET || 'test';

  const validate = AuthValidation.instance.signInValidate(params);
  if (validate.error) throw new BadRequestError(validate.error.message);

  const user = await UserModel.findOne({ email: params.email });
  if (!user) throw new BadRequestError('Invalid email.');

  const isValid = await user.comparePassword(params.password);
  if (!isValid) throw new BadRequestError('Wrong password.');

  return Jwt.signJwt({ user: removeFieldsNotUse(user, ['password']) }, AccessTokenSecret, {
    expiresIn: AccessTokenTtl,
    algorithm: 'HS256',
  });
}

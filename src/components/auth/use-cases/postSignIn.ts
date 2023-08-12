import { omit } from 'lodash';
import UserModel from '../../../models/user.model';
import { AuthValidation } from '../validation';
import { BadRequestError } from '../../../../errors';
import { signJwt } from '../../../utils/jwt';
import { FindOneUserParams } from '../interfaces';

const ACCESS_TOKEN_TTL = process.env.ACCESS_TOKEN_TTL || '10m';

export async function postSignIn(params: FindOneUserParams): Promise<string> {
  const validate = AuthValidation.instance.signInValidate(params);
  if (validate.error) {
    throw new BadRequestError(validate.error.message);
  }
  try {
    const user = await UserModel.findOne({ email: params.email });
    if (!user) throw new BadRequestError('Invalid email');
    const isValid = await user.comparePassword(params.password);
    if (!isValid) throw new BadRequestError('wrong password');

    return signJwt({ user }, 'accessTokenPrivateKey', {
      expiresIn: ACCESS_TOKEN_TTL,
      algorithm: 'HS256',
    });
  } catch (error) {
    throw error;
  }
}

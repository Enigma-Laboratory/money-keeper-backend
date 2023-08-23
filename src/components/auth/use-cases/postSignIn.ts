import UserModel from '@/models/user.model';
import { AuthValidation } from '../validation';
import { BadRequestError, ConflictError } from '@/errors';
import Jwt from '@/services/jwtServices';
import { FindOneUserParams } from '../interfaces';
import Config from '@/services/configServices';

export async function postSignIn(params: FindOneUserParams): Promise<string> {
  AuthValidation.instance.signInValidate(params);

  try {
    const user = await UserModel.findOne({ email: params.email });
    if (!user) throw new BadRequestError('Invalid email.');

    const isValid = await user.comparePassword(params.password);
    if (!isValid) throw new BadRequestError('Wrong password.');

    return Jwt.signJwt({ user: user }, Config.instance.accessTokenSecret, {
      expiresIn: Config.instance.accessTokenTtl,
      algorithm: 'HS256',
    });
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

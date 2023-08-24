import UserModel from '@/models/user.model';
import { AuthValidation } from '../validation';
import { BadRequestError, ConflictError } from '@/errors';
import Jwt from '@/services/jwtServices';
import { LoginParams } from '@/enigma-laboratory/sdk';
import Config from '@/services/configServices';

export async function signIn(params: LoginParams): Promise<string> {
  try {
    const validate = AuthValidation.instance.signInValidate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

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

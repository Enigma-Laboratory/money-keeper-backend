import { BadRequestError, ConflictError } from '@/errors';
import RefreshTokenModel from '@/models/refreshToken.model';
import UserModel from '@/models/user.model';
import Config from '@/services/configServices';
import Jwt from '@/services/jwtServices';
import { LoginParams, LoginResponse } from '@enigma-laboratory/shared';
import { AuthValidation } from '../validation';

export async function signIn(params: LoginParams): Promise<LoginResponse> {
  try {
    const validate = AuthValidation.instance.signInValidate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    const user = await UserModel.findOne({ email: params.email });
    if (!user) throw new BadRequestError('Invalid email.');

    const isValid = await user.comparePassword(params.password);
    if (!isValid) throw new BadRequestError('Wrong password.');

    const token = Jwt.signJwt({ user: user }, Config.instance.accessTokenSecret, {
      expiresIn: Config.instance.accessTokenTtl,
      algorithm: 'HS256',
    });

    const refreshToken = Jwt.signJwt({ user: user }, Config.instance.accessTokenSecret, {
      expiresIn: Config.instance.refreshTokenTtl,
      algorithm: 'HS256',
    });

    await RefreshTokenModel.create({
      token: refreshToken,
      user,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 1000),
    });

    return { token, refreshToken };
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

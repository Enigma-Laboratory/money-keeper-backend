import { BadRequestError } from '@/errors';
import RefreshTokenModel from '@/models/refreshToken.model';
import Config from '@/services/configServices';
import Jwt from '@/services/jwtServices';
import { UnauthorizedError } from '@enigma-laboratory/shared';

export async function refreshToken(refreshToken: string): Promise<{ token: string }> {
  try {
    if (!refreshToken) throw new BadRequestError('Refresh token is required.');

    const { decoded: refreshDecoded, expired: refreshExpired } = Jwt.verifyJwt(
      refreshToken?.toString(),
      Config.instance.refreshTokenSecret,
    );

    if (!refreshDecoded || refreshExpired) throw new UnauthorizedError('Refresh token is expired.');

    const { user } = refreshDecoded as unknown as any;

    // Check if the refresh token exists in the database
    validateRefreshToken(refreshToken);

    // Generate a new access token
    const token = Jwt.signJwt({ user: user }, Config.instance.accessTokenSecret, {
      expiresIn: Config.instance.accessTokenTtl,
      algorithm: 'HS256',
    });

    return { token };
  } catch (error: any) {
    throw new UnauthorizedError(error.message);
  }
}

const validateRefreshToken = async (token: string) => {
  try {
    const refreshToken = await RefreshTokenModel.findOne({ token });
    if (!refreshToken) {
      throw new UnauthorizedError('Refresh token does not exist.');
    }
    return refreshToken;
  } catch (error) {
    throw new UnauthorizedError('Error validating refresh token.');
  }
};

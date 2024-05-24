import RefreshTokenModel from '@/models/refreshToken.model';
import { BadRequestError } from '@enigma-laboratory/shared';

export async function signOut(refreshToken: string): Promise<void> {
  try {
    if (!refreshToken) throw new BadRequestError('Refresh token is required.');
    // Assuming you have a RefreshTokenModel for managing tokens
    await RefreshTokenModel.deleteOne({ token: refreshToken });
  } catch (error: any) {
    throw new Error('Failed to sign out: ' + error.message);
  }
}

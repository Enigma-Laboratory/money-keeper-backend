import { omit } from 'lodash';
import UserModel from '../../../models/user.model';

export async function validatePassword({ email, password }: { email: string; password: string }) {
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return false;
    }
    const isValid = await user.comparePassword(password);
    if (!isValid) {
      return false;
    }
    return omit(user.toJSON(), 'password');
  } catch (e: any) {
    throw new Error(e);
  }
}

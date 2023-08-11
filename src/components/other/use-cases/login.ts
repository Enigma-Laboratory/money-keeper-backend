import { omit } from 'lodash';
import UserModel from '../../../models/user.model';

export async function login(params: any) {
  try {
    const user = await UserModel.findOne({ email: params.email });
    if (!user) return { error: 'Invalid email' };
    const isValid = await user.comparePassword(params.password);
    if (!isValid) return { error: 'wrong password' };

    return { data: omit(user.toJSON(), 'password') };
  } catch (e: any) {
    throw new Error(e);
  }
}

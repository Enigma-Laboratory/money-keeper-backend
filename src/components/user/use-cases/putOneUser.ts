import UserModel from '@/models/user.model';
import { UpdateOneUserParams } from '../interface';

export async function putOneUser(params: UpdateOneUserParams) {
  try {
    const user = await UserModel.updateOne(params);
    return user.matchedCount;
  } catch (error) {
    throw { error };
  }
}

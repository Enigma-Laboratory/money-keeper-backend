import UserModel from '@/models/user.model';
import { UpdateOneUserParams } from '../interface';

export async function putOneUser(filter: any, body: UpdateOneUserParams) {
  try {
    const user = await UserModel.updateOne(filter, body);
    return user;
  } catch (e: any) {
    throw new Error(e);
  }
}

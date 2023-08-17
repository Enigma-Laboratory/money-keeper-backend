import UserModel from '@/models/user.model';
import { UpdateOneUserParams } from '../interface';

export async function putCreateUser(params: userInput) {
  try {
    const user = await UserModel.updateOne(params);
    return user.matchedCount;
  } catch (error) {
    throw { error };
  }
}

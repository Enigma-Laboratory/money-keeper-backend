import UserModel from '@/models/user.model';
import { removeFieldsNotUse } from '@/shared/transformedData';
import { FindAllUserResponse } from '../interface';

export async function getAllUsers(): Promise<FindAllUserResponse> {
  try {
    const users = await UserModel.find().lean().exec();
    return {
      count: users.length,
      rows: users?.map(user => removeFieldsNotUse(user)),
    };
  } catch (error) {
    throw { error };
  }
}

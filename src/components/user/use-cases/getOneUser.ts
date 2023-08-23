import { NotFoundError } from '@/errors';
import UserModel from '@/models/user.model';
import { FindOneUserParams, User } from '@/enigma-laboratory/sdk/user';
import { UserValidation } from '../validation';
import { removeFieldsNotUse } from '@/shared/transformedData';

export async function getOneUser(params: FindOneUserParams): Promise<User> {
  try {
    UserValidation.instance.getOneUserValidation(params);

    const user = await UserModel.findOne(params);
    if (!user) throw new NotFoundError('User not found.');

    return removeFieldsNotUse(user.toJSON(), ['password']);
  } catch (e: any) {
    throw new Error(e);
  }
}

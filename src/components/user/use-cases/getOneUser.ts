import { FindOneUserParams, User } from '@/enigma-laboratory/sdk/user';
import { ConflictError, NotFoundError } from '@/errors';
import UserModel from '@/models/user.model';
import { removeFieldsNotUse } from '@/shared/transformedData';
import { UserValidation } from '../validation';

export async function getOneUser(params: FindOneUserParams): Promise<User> {
  try {
    UserValidation.instance.getOneUserValidation(params);

    const user = await UserModel.findOne(params);
    if (!user) throw new NotFoundError('User not found.');

    return removeFieldsNotUse(user.toJSON(), ['password']);
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

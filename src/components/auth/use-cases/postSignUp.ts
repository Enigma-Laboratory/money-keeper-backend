import { BadRequestError, ConflictError } from '@/errors';
import { removeFieldsNotUse } from '@/shared/transformedData';
import UserModel from '@/models/user.model';
import { CreateUserParams, User } from '@/enigma-laboratory/sdk/user';
import { AuthValidation } from '../validation';

export async function postSignUpUser(params: CreateUserParams): Promise<User> {
  AuthValidation.instance.signUpValidate(params);
  try {
    const user = await UserModel.create(params);
    if (!user) throw new BadRequestError('Can not create user.');

    return removeFieldsNotUse(user).toJSON();
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

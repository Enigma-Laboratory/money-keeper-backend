import { BadRequestError, ConflictError } from '@/errors';
import UserModel from '@/models/user.model';
import { removeFieldsNotUse } from '@/shared/transformedData';
import { CreateUserParams, User } from '@enigma-laboratory/shared';
import { AuthValidation } from '../validation';

export async function signUp(params: CreateUserParams): Promise<User> {
  const validate = AuthValidation.instance.signUpValidate(params);
  if (validate.error) throw new BadRequestError(validate.error.message);

  try {
    const user = await UserModel.create(params);
    if (!user) throw new BadRequestError('Can not create user.');

    return removeFieldsNotUse(user).toJSON();
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

import { User } from '@/components/user/interface';
import { BadRequestError } from '@/errors';
import UserModel from '@/models/user.model';
import { removeFieldsNotUse } from '@/shared/transformedData';
import { CreateUserParams } from '../interfaces';
import { AuthValidation } from '../validation';

export async function postSignUpUser(params: CreateUserParams): Promise<User> {
  const validate = AuthValidation.instance.signUpValidate(params);
  if (validate.error) throw new Error(validate.error.message);

  const user = await UserModel.create(params);
  if (!user) throw new BadRequestError('Can not create user.');
  return removeFieldsNotUse(user.toJSON(), ['password']);
}

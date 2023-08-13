import { BadRequestError } from '../../../../errors';
import { removeFieldsNotUse } from '../../../../shared/transformedData';
import UserModel from '../../../models/user.model';
import { User } from '../../customer/interface';
import { CreateUserParams } from '../interfaces';
import { AuthValidation } from '../validation';

export async function postSignUpUser(params: CreateUserParams): Promise<User> {
  const validate = AuthValidation.instance.signUpValidate(params);
  if (validate.error) throw new BadRequestError(validate.error.message);
  try {
    const user = await UserModel.create(params);
    if (!user) throw new BadRequestError('Can not create user.');
    return removeFieldsNotUse(user).toJSON();
  } catch (error) {
    throw { error };
  }
}

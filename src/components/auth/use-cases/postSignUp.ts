import { BadRequestError } from '../../../../errors';
import UserModel, { userInput } from '../../../models/user.model';
import { User } from '../../customer/interface';
import { CreateUserParams } from '../interfaces';
import { AuthValidation } from '../validation';

export async function postSignUpUser(params: CreateUserParams): Promise<User> {
  const validate = AuthValidation.instance.signUpValidate(params);
  if (validate.error) throw new BadRequestError(validate.error.message);
  try {
    const user = await UserModel.create(params);
    return user.toJSON();
  } catch (e: any) {
    throw new Error(e);
  }
}

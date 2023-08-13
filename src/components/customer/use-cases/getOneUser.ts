import { BadRequestError, NotFoundError } from '../../../../errors';
import UserModel from '../../../models/user.model';
import logger from '../../../utils/logger';
import { User } from '../interface';
import { CustomerValidation } from '../validation';

export async function getOneUser(email: string): Promise<User> {
  const validate = CustomerValidation.instance.getOneUserValidation({ email });
  if (validate.error) {
    throw new BadRequestError(validate.error.message);
  }
  try {
    const user = await UserModel.findOne({
      email,
    });
    if (!user) throw new NotFoundError('User not found');
    return user.toJSON();
  } catch (error) {
    throw { error };
  }
}

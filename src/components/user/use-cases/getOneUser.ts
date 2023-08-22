import { BadRequestError, NotFoundError } from '@/errors';
import UserModel from '@/models/user.model';
import { FindOneUserParams, User } from '../interface';
import { UserValidation } from '../validation';
import { removeFieldsNotUse } from '@/shared/transformedData';

export async function getOneUser(params: FindOneUserParams): Promise<User> {
  const validate = UserValidation.instance.getOneUserValidation(params);
  if (validate.error) throw new BadRequestError(validate.error.message);

  try {
    const user = await UserModel.findOne({
      id: params.id,
    });
    if (!user) throw new NotFoundError('User not found');
    return removeFieldsNotUse(user.toJSON(), ['password']);
  } catch (e: any) {
    throw new Error(e);
  }
}

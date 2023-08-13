import { BadRequestError, NotFoundError } from '../../../../errors';
import { removeFieldsNotUse } from '../../../../shared/transformedData';
import UserModel from '../../../models/user.model';
import { FindOneUserParams, User } from '../interface';
import { CustomerValidation } from '../validation';

export async function getOneUser(params: FindOneUserParams): Promise<User> {
  const validate = CustomerValidation.instance.getOneUserValidation(params);
  if (validate.error) {
    throw new BadRequestError(validate.error.message);
  }
  try {
    const user = await UserModel.findOne({
      id: params.id,
    });
    if (!user) throw new NotFoundError('User not found');
    return user.toJSON();
  } catch (error) {
    throw { error };
  }
}

import { BadRequestError, InternalServerError } from '@/errors';
import UserModel from '@/models/user.model';
import { removeFieldsNotUse } from '@/shared/transformedData';
import { UpdateOneUserParams } from '@enigma-laboratory/shared';
import { UserValidation } from '../validation';

export async function updateOneUser(params: UpdateOneUserParams) {
  try {
    const validate = UserValidation.instance.updateOneUserValidation(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    const { email, _id, currentPassword, ...remaining } = params;

    let query: any = {};
    if (_id) {
      query = { _id: params._id };
    } else if (email) {
      query = { email: params.email };
    } else {
      throw new Error('Invalid identifier');
    }

    const user = await UserModel.findOneAndUpdate(
      query,
      { ...remaining, ...(currentPassword && { password: currentPassword }) },
      { new: true },
    ).lean();

    if (!user) {
      throw new BadRequestError('User not found or not updated.');
    }

    return removeFieldsNotUse(user);
  } catch (error: any) {
    throw new InternalServerError(error.message);
  }
}

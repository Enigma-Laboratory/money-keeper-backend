import UserModel from '@/models/user.model';
import { removeFieldsNotUse } from '@/shared/transformedData';
import { BadRequestError, ConflictError, UpdateOneUserParams } from '@enigma-laboratory/shared';
import { omit } from 'lodash';

export async function updateOneUser(params: UpdateOneUserParams) {
  try {
    const user = await UserModel.findOneAndUpdate({ _id: params._id }, omit(params, ['id']), { new: true });
    if (!user) throw new BadRequestError("Don't have the user updated.");

    return removeFieldsNotUse(user);
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

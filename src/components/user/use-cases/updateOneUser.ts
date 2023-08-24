import { BadRequestError, ConflictError } from '@/errors';
import UserModel from '@/models/user.model';
import { UpdateOneUserParams } from '@/enigma-laboratory/sdk';
import { removeFieldsNotUse } from '@/shared/transformedData';
import { omit } from 'lodash';

export async function updateOneUser(params: UpdateOneUserParams) {
  try {
    const user = await UserModel.findOneAndUpdate({ id: params.id }, omit(params, ['id']), { new: true });
    if (!user) throw new BadRequestError("Don't have the user updated.");

    return removeFieldsNotUse(user);
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

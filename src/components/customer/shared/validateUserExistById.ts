import { BadRequestError, NotFoundError } from '../../../../errors';
import UserModel from '../../../models/user.model';

export async function validateUserExistById(id: string): Promise<any> {
  try {
    const user = await UserModel.findOne({ id });
    if (!user) throw new BadRequestError('validate user exist by id error.');
    return user;
  } catch (error) {
    throw { error };
  }
}

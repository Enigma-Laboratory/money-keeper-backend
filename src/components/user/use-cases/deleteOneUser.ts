import { NotFoundError } from '@/errors';
import UserModel from '@/models/user.model';

export async function deleteOneUser(id: string) {
  try {
    const user = await UserModel.findOne({
      id,
    });
    if (!user) throw new NotFoundError(`Can not delete user with ${id}`);

    return user?.toJSON();
  } catch (error) {
    throw { error };
  }
}

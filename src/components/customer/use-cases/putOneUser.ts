import UserModel, { userInput } from '../../../models/user.model';

export async function putCreateUser(params: userInput) {
  try {
    const user = await UserModel.updateOne(params);
    return user.matchedCount;
  } catch (error) {
    throw { error };
  }
}

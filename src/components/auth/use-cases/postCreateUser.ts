import UserModel, { userInput } from "../../../models/user.model";

export async function postCreateUser(params: userInput) {
  try {
    const user = await UserModel.create(params);
    return user.toJSON();
  } catch (e: any) {
    throw new Error(e);
  }
}

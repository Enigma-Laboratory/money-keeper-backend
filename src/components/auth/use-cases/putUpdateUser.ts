import UserModel, { userInput } from "../../../models/user.model";

export async function putCreateUser(params: userInput) {
  try {
    const user = await UserModel.updateOne(params);
    return user.matchedCount;
  } catch (e: any) {
    throw new Error(e);
  }
}

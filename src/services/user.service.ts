import UserModel, { userInput } from "../models/user.model";

export async function createUser(params: userInput) {
  try {
    const user = await UserModel.create(params);
    return user.toJSON();
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function getOneUser(email: string) {
  try {
    const user = await UserModel.findOne({
      email,
    });

    return user?.toJSON();
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function getAllUsers() {
  try {
    const users = await UserModel.find();
    return users;
  } catch (e: any) {
    throw new Error(e);
  }
}

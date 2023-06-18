import UserModel, { userInput } from "../models/user.model";
import { omit } from "lodash";

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

export async function validatePassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return false;
    }
    const isValid = await user.comparePassword(password);
    if (!isValid) {
      return false;
    }
    return omit(user, "password");
  } catch (e: any) {
    throw new Error(e);
  }
}

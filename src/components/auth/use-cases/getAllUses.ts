import { omit } from "lodash";
import UserModel from "../../../models/user.model";
import { FindAllUserResponse, User } from "../interface";

export async function getAllUsers(): Promise<FindAllUserResponse> {
  try {
    const users = await UserModel.find().lean().exec();
    const transformedUsers: User[] = users.map((user) => {
      const { _id, __v, password, ...rest } = user;
      return { id: _id, ...rest };
    });
    return {
      count: users.length,
      rows: omit(transformedUsers, "password"),
    };
  } catch (e: any) {
    throw new Error(e);
  }
}

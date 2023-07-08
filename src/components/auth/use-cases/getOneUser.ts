import UserModel from "../../../models/user.model";

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

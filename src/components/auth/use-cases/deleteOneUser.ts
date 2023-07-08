import UserModel from "../../../models/user.model";

export async function deleteOneUser(id: string) {
  try {
    const user = await UserModel.findOne({
      id,
    });

    return user?.toJSON();
  } catch (e: any) {
    throw new Error(e);
  }
}

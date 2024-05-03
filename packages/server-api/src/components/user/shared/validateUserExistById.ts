import UserModel from "@/models/user.model";
import { BadRequestError, ConflictError } from "@enigma-laboratory/shared";

export async function validateUserExistById(id: string): Promise<any> {
  try {
    const user = await UserModel.findOne({ id });
    if (!user) throw new BadRequestError("validate user exist by id error.");
    return user;
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

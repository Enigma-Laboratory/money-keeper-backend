import UserModel from "@/models/user.model";
import { removeFieldsNotUse } from "@/shared/transformedData";
import {
  BadRequestError,
  ConflictError,
  FindOneUserParams,
  NotFoundError,
  User,
} from "@enigma-laboratory/shared";
import { UserValidation } from "../validation";

export async function getOneUser(params: FindOneUserParams): Promise<User> {
  try {
    const validate = UserValidation.instance.getOneUserValidate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    const user = await UserModel.findOne(params);
    if (!user) throw new NotFoundError("User not found.");

    return removeFieldsNotUse(user.toJSON(), ["password"]);
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

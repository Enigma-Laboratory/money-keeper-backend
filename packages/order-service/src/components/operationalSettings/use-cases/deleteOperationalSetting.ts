import { CreateApplication } from '@/app';
import OperationalSettingModel from '@/models/operationalSetting.model';
import {
  BadRequestError,
  DeleteOneOperationalSettingParams,
  InternalServerError,
  OperationalSettingEvent,
  User,
  UserTypes,
} from '@enigma-laboratory/shared';

export async function deleteOperationalSetting(user: User, { _id }: DeleteOneOperationalSettingParams): Promise<void> {
  try {
    const { role } = user;

    if (role !== UserTypes.ADMIN) {
      throw new BadRequestError('Only admins can delete operational settings.');
    }

    const result = await OperationalSettingModel.findByIdAndDelete(_id);

    if (!result) throw new BadRequestError("Operational setting not found or couldn't be deleted.");

    CreateApplication.instance.broadcastEvent(OperationalSettingEvent.DELETED, { result });
  } catch (error: any) {
    throw new InternalServerError(error.message);
  }
}

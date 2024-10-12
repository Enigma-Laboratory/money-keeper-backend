import OperationalSettingModel from '@/models/operationalSetting.model';
import { FindAllOperationalSettingResponse, User, UserTypes } from '@enigma-laboratory/shared';
import { InternalServerError } from '@/errors';

export async function getAllOperationalSettings(user: User): Promise<FindAllOperationalSettingResponse> {
  try {
    const { _id, role } = user;

    let query = {};
    if (role !== UserTypes.ADMIN) {
      query = { userIds: { $in: [_id] } };
    }

    const groups = await OperationalSettingModel.find(query).sort({
      createdAt: -1,
    });

    return {
      count: groups.length,
      rows: groups,
    };
  } catch (error: any) {
    throw new InternalServerError(error.message);
  }
}

import { InternalServerError } from '@enigma-laboratory/shared';
import { FindAllOperationalSettingResponse } from '@enigma-laboratory/shared';
import OperationalSettingModel from '@/models/operationalSetting.model';

export async function getAllOperationalSettings(): Promise<FindAllOperationalSettingResponse> {
  try {
    const groups = await OperationalSettingModel.find();

    return {
      count: groups.length,
      rows: groups,
    };
  } catch (error: any) {
    throw new InternalServerError(error.message);
  }
}

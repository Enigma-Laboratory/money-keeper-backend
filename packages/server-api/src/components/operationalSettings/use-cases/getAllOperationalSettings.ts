import OperationalSettingModel from '@/models/operationalSetting.model';
import { FindAllOperationalSettingResponse } from '@enigma-laboratory/shared';

import { InternalServerError } from '@/errors';

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

import { InternalServerError } from '@/errors';
import { FindAllOperationalSettingResponse } from '@/enigma-laboratory/sdk';
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

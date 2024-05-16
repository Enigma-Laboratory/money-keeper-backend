import OperationalSettingModel from '@/models/operationalSetting.model';
import { removeFieldsNotUse } from '@/shared/transformedData';
import {
  CreateOneOperationalSettingParams,
  CreateOneOperationalSettingResponse,
  OperationalSettingEvent,
} from '@enigma-laboratory/shared';

import { CreateApplication } from '@/app';
import { BadRequestError, ConflictError } from '@/errors';
import { OperationalSettingValidation } from '../validation';

export async function postCreateOperationalSettings(
  params: CreateOneOperationalSettingParams,
): Promise<CreateOneOperationalSettingResponse> {
  try {
    const validate = OperationalSettingValidation.instance.postAllGroupValidate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    const groups = await OperationalSettingModel.find();

    if (groups.map(({ name }) => name).includes(params.name)) {
      throw new ConflictError('Group name is duplicated');
    }
    // when user create order set default status is opening
    const order = await OperationalSettingModel.create({
      ...params,
      status: 'opening',
    });
    if (!order) throw new BadRequestError('Can not create operational setting.');

    const operationalSetting = removeFieldsNotUse(order.toJSON());

    CreateApplication.instance.broadcastEvent(OperationalSettingEvent.CREATED, operationalSetting);

    return operationalSetting;
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

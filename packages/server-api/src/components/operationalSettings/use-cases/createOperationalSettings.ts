import OperationalSettingModel from '@/models/operationalSetting.model';
import { removeFieldsNotUse } from '@/shared/transformedData';
import {
  BadRequestError,
  ConflictError,
  CreateOneOperationalSettingParams,
  CreateOneOperationalSettingResponse,
} from '@enigma-laboratory/shared';
import { OperationalSettingValidation } from '../validation';

export async function postCreateOperationalSettings(
  params: CreateOneOperationalSettingParams,
): Promise<CreateOneOperationalSettingResponse> {
  try {
    const validate = OperationalSettingValidation.instance.postAllGroupValidate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    const groups = await OperationalSettingModel.find();

    if (groups.map(({ name }) => name).includes(params.name)) {
      throw new ConflictError('group name is duplicated');
    }
    // when user create order set default status is opening
    const order = await OperationalSettingModel.create({
      ...params,
      status: 'opening',
    });
    if (!order) throw new BadRequestError('Can not create operational setting.');

    return removeFieldsNotUse(order.toJSON());
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

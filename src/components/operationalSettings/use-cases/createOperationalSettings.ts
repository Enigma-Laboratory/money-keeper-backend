import { BadRequestError, ConflictError } from '@/errors';
import OrderModel from '@/models/order.model';
import { OperationalSettingValidation } from '../validation';
import {
  CreateOneOperationalSettingParams,
  CreateOneOperationalSettingResponse,
  CreateOneOrderParams,
  CreateOneOrderResponse,
  OrderStatus,
} from '@/enigma-laboratory/sdk';
import { removeFieldsNotUse } from '@/shared/transformedData';
import OperationalSettingModel from '@/models/operationalSetting.model';

export async function postCreateOperationalSettings(
  params: CreateOneOperationalSettingParams,
): Promise<CreateOneOperationalSettingResponse> {
  try {
    const validate = OperationalSettingValidation.instance.postAllGroupValidate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    const groups = await OperationalSettingModel.find();

    if (groups.map(({ group }) => group).includes(params.group)) {
      throw new ConflictError('group name is duplicated');
    }

    const order = await OperationalSettingModel.create(params);
    if (!order) throw new BadRequestError('Can not create operational setting.');

    return removeFieldsNotUse(order.toJSON());
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

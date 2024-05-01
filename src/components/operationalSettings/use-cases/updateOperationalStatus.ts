import { BadRequestError, InternalServerError } from '@/errors';
import { OperationalSettingValidation } from '../validation';
import { UpdateOneOperationalSettingParams, UpdateOneOperationalSettingResponse } from '@/enigma-laboratory/sdk';
import { removeFieldsNotUse } from '@/shared/transformedData';
import OperationalSettingModel from '@/models/operationalSetting.model';
import OrderModel from '@/models/order.model';

export async function updateOperationalStatus(
  params: UpdateOneOperationalSettingParams,
): Promise<UpdateOneOperationalSettingResponse> {
  try {
    const validate = OperationalSettingValidation.instance.putOperationalSettingValidate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    const orders = await OrderModel.find({ groupId: params?._id });

    if ((orders || []).some(order => order.status !== 'done')) {
      throw new BadRequestError('The order status is not done ');
    }

    const groups = await OperationalSettingModel.findByIdAndUpdate(
      params._id,
      { status: params.status },
      {
        new: true,
      },
    ).lean();

    if (!groups) throw new BadRequestError("Don't have the group updated.");

    return removeFieldsNotUse(groups);
  } catch (error: any) {
    throw new InternalServerError(error.message);
  }
}

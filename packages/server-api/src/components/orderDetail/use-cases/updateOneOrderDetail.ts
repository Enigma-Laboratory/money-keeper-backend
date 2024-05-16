import OrderDetailModel from '@/models/order.detail.model';
import { removeFieldsNotUse } from '@/shared/transformedData';
import { UpdateOneOrderDetailParams, UpdateOneOrderDetailResponse } from '@enigma-laboratory/shared';
import { omit } from 'lodash';
import { OrderDetailValidation } from '../validation';

import { BadRequestError, ConflictError } from '@/errors';

export async function updateOneOrderDetail(params: UpdateOneOrderDetailParams): Promise<UpdateOneOrderDetailResponse> {
  try {
    const validate = OrderDetailValidation.instance.updateOneOrderDetail(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    const orderDetail = await OrderDetailModel.findOneAndUpdate({ id: params.id }, omit(params, ['id']), {
      new: true,
    }).lean();
    if (!orderDetail) throw new BadRequestError("Don't have the order detail updated.");

    return removeFieldsNotUse(orderDetail);
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

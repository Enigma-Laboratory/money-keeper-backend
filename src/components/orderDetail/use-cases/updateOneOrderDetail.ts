import { BadRequestError, ConflictError } from '@/errors';
import OrderDetailModel from '@/models/order.detail.model';
import { UpdateOneOrderDetailParams, UpdateOneOrderDetailResponse } from '@/enigma-laboratory/sdk/orderDetail';
import { omit } from 'lodash';
import { removeFieldsNotUse } from '@/shared/transformedData';

export async function updateOneOrderDetail(params: UpdateOneOrderDetailParams): Promise<UpdateOneOrderDetailResponse> {
  try {
    const orderDetail = await OrderDetailModel.findOneAndUpdate({ id: params.id }, omit(params, ['id']), {
      new: true,
    }).lean();
    if (!orderDetail) throw new BadRequestError("Don't have the order detail updated.");

    return removeFieldsNotUse(orderDetail);
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

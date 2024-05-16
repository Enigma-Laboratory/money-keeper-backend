import { BadRequestError, ConflictError } from '@/errors';
import OrderDetailModel from '@/models/order.detail.model';
import { DeleteOneOrderDetailParams, DeleteOneOrderDetailResponse } from '@enigma-laboratory/shared';
import { OrderDetailValidation } from '../validation';

export async function deleteOneOrderDetail(params: DeleteOneOrderDetailParams): Promise<DeleteOneOrderDetailResponse> {
  try {
    const validate = OrderDetailValidation.instance.deleteOneOrderDetail(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    const deleted = await OrderDetailModel.deleteOne(params);
    return { result: deleted.deletedCount };
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

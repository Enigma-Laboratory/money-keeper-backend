import { ConflictError } from '@/errors';
import OrderDetailModel from '@/models/order.detail.model';
import { DeleteOneOrderDetailParams, DeleteOneOrderDetailResponse } from '@/enigma-laboratory/sdk';

export async function deleteOneOrderDetail(params: DeleteOneOrderDetailParams): Promise<DeleteOneOrderDetailResponse> {
  try {
    const deleted = await OrderDetailModel.deleteOne(params);
    if (deleted.deletedCount === 1) return { result: true };
    else if (deleted.deletedCount === 0) return { result: false };
    return { result: undefined };
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

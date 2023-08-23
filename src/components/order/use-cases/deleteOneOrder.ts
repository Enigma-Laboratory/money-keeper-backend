import OrderModel from '@/models/order.model';
import { DeleteOneOrderParams, DeleteOneOrderResponse } from '@/packages/order/order.interfaces';
import { OrderValidation } from '../validation';
import { ConflictError } from '@/errors';

export async function deleteOneOrder(params: DeleteOneOrderParams): Promise<DeleteOneOrderResponse> {
  try {
    OrderValidation.instance.deleteOneOrder(params);

    const deleted = await OrderModel.deleteOne(params);
    if (deleted.deletedCount === 1) return { result: true };
    else if (deleted.deletedCount === 0) return { result: false };
    return { result: undefined };
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

import { ConflictError } from '@/errors';
import OrderDetailModel from '@/models/order.detail.model';
import { UpdateOneOrderDetailParams } from '@/packages/orderDetail/orderDetail.interfaces';

export async function updateOneOrderDetail(params: UpdateOneOrderDetailParams): Promise<any> {
  try {
    const orderDetail = await OrderDetailModel.findOneAndUpdate(params);
    return orderDetail;
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

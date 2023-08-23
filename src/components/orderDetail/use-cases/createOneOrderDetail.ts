import { ConflictError } from '@/errors';
import OrderDetailModel from '@/models/order.detail.model';

export async function postCreateOrderDetail(params: any): Promise<any> {
  try {
    const orderDetail = await OrderDetailModel.create(params);
    return orderDetail.toJSON();
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

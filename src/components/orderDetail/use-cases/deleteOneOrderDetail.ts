import OrderDetailModel from '@/models/order.detail.model';
import { DeleteOneOrderDetailParams } from '@/packages/orderDetail';

export async function deleteOneOrderDetail(params: DeleteOneOrderDetailParams): Promise<any> {
  try {
    const orderDetail = await OrderDetailModel.findByIdAndRemove(params);
    return orderDetail;
  } catch (error: any) {
    throw new Error(error);
  }
}

import { ConflictError } from '@/errors';
import OrderDetailModel from '@/models/order.detail.model';
import { FindAllOrderDetailParams, FindAllOrderDetailResponse, OrderDetail } from '@/packages/orderDetail';
import { removeFieldsNotUse } from '@/shared/transformedData';

export async function getAllOrderDetail(params: FindAllOrderDetailParams): Promise<FindAllOrderDetailResponse> {
  try {
    const orderDetail = await OrderDetailModel.find(params).lean().exec();
    const x: OrderDetail[] = orderDetail.map(_ => removeFieldsNotUse(_));
    return {
      count: orderDetail.length,
      rows: x,
    };
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

import OrderDetailModel from '@/models/order.detail.model';
import { removeFieldsNotUse } from '@/shared/transformedData';
import {
  ConflictError,
  FindAllOrderDetailParams,
  FindAllOrderDetailResponse,
  OrderDetail,
} from '@enigma-laboratory/shared';

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

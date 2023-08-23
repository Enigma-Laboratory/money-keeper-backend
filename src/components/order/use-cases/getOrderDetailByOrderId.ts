import { ConflictError } from '@/errors';
import OrderDetailModel from '@/models/order.detail.model';
import {
  FindAllOrderDetailByOrderIdParams,
  FindAllOrderDetailByOrderIdResponse,
  OrderDetail,
} from '@/packages/orderDetail/orderDetail.interfaces';
import { OrderValidation } from '../validation';
import { removeFieldsNotUse } from '@/shared/transformedData';

export async function getOrderDetailByOrderId(
  params: FindAllOrderDetailByOrderIdParams,
): Promise<FindAllOrderDetailByOrderIdResponse> {
  OrderValidation.instance.getAllOrderDetailByOrderId(params);

  try {
    const orders = await OrderDetailModel.find(params).lean().exec();
    const x: OrderDetail[] = orders.map(_ => removeFieldsNotUse(_));
    return {
      count: orders.length,
      rows: x,
    };
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

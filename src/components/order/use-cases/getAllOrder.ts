import { ConflictError } from '@/errors';
import OrderModel from '@/models/order.model';
import { FindAllOrderParams, FindAllOrderResponse, Order } from '@/packages/order/order.interfaces';
import { OrderValidation } from '../validation';
import { removeFieldsNotUse } from '@/shared/transformedData';

export async function getAllOrders(params: FindAllOrderParams): Promise<FindAllOrderResponse> {
  OrderValidation.instance.getAllOrderParams(params);

  try {
    const orders = await OrderModel.find().lean().exec();
    const x: Order[] = orders.map(_ => removeFieldsNotUse(_));
    return {
      count: orders.length,
      rows: x,
    };
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

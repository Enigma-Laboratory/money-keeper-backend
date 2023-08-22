import { BadRequestError } from '@/errors';
import OrderModel from '@/models/order.model';
import { FindOneOrderResponse, UpdateOrderParams } from '../interface';
import { OrderValidation } from '../validation';

export async function putUpdateOneOrder(filter: object, params: UpdateOrderParams): Promise<any> {
  try {
    const validate = OrderValidation.instance.updateOrderParams({ ...filter, ...params });
    if (validate.error) throw new BadRequestError(validate.error.message);

    const order = await OrderModel.updateOne(filter, params);
    if (!order) throw new BadRequestError('Cannot update order ');

    return order;
  } catch (e: any) {
    throw new Error(e);
  }
}

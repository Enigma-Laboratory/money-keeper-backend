import OrderModel from '@/models/order.model';
import { removeFieldsNotUse } from '@/shared/transformedData';
import { FindAllOrderParams, FindAllOrderResponse, Order } from '@enigma-laboratory/shared';
import { OrderValidation } from '../validation';

import { BadRequestError, ConflictError } from '@/errors';

export async function getDailyOrder(params: FindAllOrderParams): Promise<FindAllOrderResponse> {
  try {
    const validate = OrderValidation.instance.getAllOrderValidate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    const orders = await OrderModel.find().lean().exec();
    const convertOrder: Order[] = orders.map(_ => removeFieldsNotUse(_));
    return {
      count: orders.length,
      rows: convertOrder,
    };
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

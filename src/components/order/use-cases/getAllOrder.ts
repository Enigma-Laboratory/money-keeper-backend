import { BadRequestError, ConflictError } from '@/errors';
import OrderModel from '@/models/order.model';
import { FindAllOrderParams, FindAllOrderResponse, Order } from '@/enigma-laboratory/sdk';
import { OrderValidation } from '../validation';
import { removeFieldsNotUse } from '@/shared/transformedData';

export async function getAllOrders(params: FindAllOrderParams): Promise<FindAllOrderResponse> {
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

import OrderModel from '@/models/order.model';
import { DeleteOrderParams } from '../interface';
import { OrderValidation } from '../validation';
import { BadRequestError } from '@/errors';

export async function deleteOneOrder(params: DeleteOrderParams): Promise<any> {
  try {
    const validate = OrderValidation.instance.deleteOneOrder(params);

    if (validate.error) throw new BadRequestError(validate.error.message);

    const x = await OrderModel.deleteOne(params);
    return x;
  } catch (error) {
    throw error;
  }
}

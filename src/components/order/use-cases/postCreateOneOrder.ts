import { BadRequestError } from '@/errors';
import OrderModel from '@/models/order.model';
import { CreateOneOrderParams } from '../interface';
import { OrderValidation } from '../validation';

export async function postCreateOneOrder(params: CreateOneOrderParams): Promise<any> {
  const validate = OrderValidation.instance.postCreateOneOrder(params);
  try {
    if (validate.error) {
      throw new BadRequestError(validate.error.message);
    }
    const order = await OrderModel.create(params);
    if (!order) throw new BadRequestError('Can not create order');
    return order.toJSON();
  } catch (error) {
    throw { error };
  }
}

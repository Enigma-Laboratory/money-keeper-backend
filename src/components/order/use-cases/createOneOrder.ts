import { BadRequestError, ConflictError } from '@/errors';
import OrderModel from '@/models/order.model';
import { OrderValidation } from '../validation';
import { CreateOneOrderParams, CreateOneOrderResponse } from '@/packages/order';
import { removeFieldsNotUse } from '@/shared/transformedData';

export async function postCreateOneOrder(params: CreateOneOrderParams): Promise<CreateOneOrderResponse> {
  OrderValidation.instance.createOneOrder(params);

  try {
    const order = await OrderModel.create(params);
    if (!order) throw new BadRequestError('Can not create order.');
    return removeFieldsNotUse(order.toJSON());
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

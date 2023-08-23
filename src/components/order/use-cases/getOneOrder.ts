import { BadRequestError, ConflictError } from '@/errors';
import OrderModel from '@/models/order.model';
import { FindOneOrderParams, FindOneOrderResponse, Order } from '@/enigma-laboratory/sdk';
import { OrderValidation } from '../validation';
import { removeFieldsNotUse } from '@/shared/transformedData';

export async function getOneOrder(params: FindOneOrderParams): Promise<FindOneOrderResponse> {
  try {
    OrderValidation.instance.getOneOrder(params);

    const order = await OrderModel.findOne(params).lean().exec();
    if (!order) throw new BadRequestError(`Can not get order with id = ${params.id}`); // [ ] review
    return removeFieldsNotUse(order);
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

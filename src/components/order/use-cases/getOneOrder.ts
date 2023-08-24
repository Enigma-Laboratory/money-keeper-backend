import { BadRequestError, ConflictError } from '@/errors';
import OrderModel from '@/models/order.model';
import { FindOneOrderParams, FindOneOrderResponse } from '@/enigma-laboratory/sdk';
import { OrderValidation } from '../validation';
import { removeFieldsNotUse } from '@/shared/transformedData';

export async function getOneOrder(params: FindOneOrderParams): Promise<FindOneOrderResponse> {
  try {
    const validate = OrderValidation.instance.getOneOrderValidate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    const order = await OrderModel.findOne(params).lean().exec();
    if (!order) throw new BadRequestError(`Can not get one order with id = ${params.id}`);

    return removeFieldsNotUse(order);
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

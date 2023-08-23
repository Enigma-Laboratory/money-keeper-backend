import { BadRequestError, ConflictError } from '@/errors';
import OrderModel from '@/models/order.model';
import { UpdateOrderParams } from '@/packages/order/order.interfaces';
import { removeFieldsNotUse } from '@/shared/transformedData';
import { omit } from 'lodash';
import { OrderValidation } from '../validation';

export async function updateOneOrder(params: UpdateOrderParams): Promise<any> {
  try {
    OrderValidation.instance.updateOrderParams(params);

    const order = await OrderModel.findOneAndUpdate({ id: params.id }, omit(params, ['id']), { new: true }).lean();
    if (!order) throw new BadRequestError("Don't have the order updated.");

    return removeFieldsNotUse(order);
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

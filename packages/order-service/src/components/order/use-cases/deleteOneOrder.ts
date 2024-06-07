import OrderModel from '@/models/order.model';
import { DeleteOneOrderParams, DeleteOneOrderResponse, OrderEvent } from '@enigma-laboratory/shared';
import { OrderValidation } from '../validation';

import { CreateApplication } from '@/app';
import { BadRequestError, ConflictError } from '@/errors';

export async function deleteOneOrder(params: DeleteOneOrderParams): Promise<DeleteOneOrderResponse> {
  try {
    const validate = OrderValidation.instance.deleteOneOrderValidate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    const deleted = await OrderModel.deleteOne(params);

    CreateApplication.instance.broadcastEvent(OrderEvent.DELETED, deleted);

    return { result: deleted.deletedCount };
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

import OrderModel from '@/models/order.model';
import {
  BadRequestError,
  ConflictError,
  DeleteOneOrderParams,
  DeleteOneOrderResponse,
} from '@enigma-laboratory/shared';
import { OrderValidation } from '../validation';

export async function deleteOneOrder(params: DeleteOneOrderParams): Promise<DeleteOneOrderResponse> {
  try {
    const validate = OrderValidation.instance.deleteOneOrderValidate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    const deleted = await OrderModel.deleteOne(params);
    return { result: deleted.deletedCount };
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

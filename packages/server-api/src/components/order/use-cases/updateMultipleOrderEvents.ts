import { BadRequestError } from '@/errors';
import {
  UpdateMultipleOrderEventsParams,
  UpdateOrderEventParams,
  UpdateOrderEventResponse,
  User,
} from '@enigma-laboratory/shared';
import { OrderValidation } from '../validation';
import { updateOrderEvent } from './updateOrderEvent';

export async function updateMultipleOrderEvents(
  user: User,
  params: UpdateMultipleOrderEventsParams,
): Promise<UpdateOrderEventResponse> {
  const validationResult = OrderValidation.instance.updateOrderEvents(params);
  if (validationResult.error) {
    throw new BadRequestError(validationResult.error.message);
  }

  try {
    for (const orderId of params.orderIds) {
      const updateParams: UpdateOrderEventParams = {
        orderId,
        status: params.status,
        date: new Date(),
        userId: user._id,
      };
      const result = await updateOrderEvent(user, updateParams);

      if (result.result === 0) {
        throw new Error(`Failed to update order with ID ${orderId}`);
      }
    }

    return { result: 1 };
  } catch (error: any) {
    console.log(error);
    return { result: 0 };
  }
}

import OrderModel, { OrderDocument } from '@/models/order.model';
import { UpdateOrderEventParams, UpdateOrderEventResponse } from '@enigma-laboratory/shared';
import { OrderValidation } from '../validation';

import { BadRequestError } from '@/errors';

export async function updateOrderEvent(params: UpdateOrderEventParams): Promise<UpdateOrderEventResponse> {
  try {
    // Validate the input parameters
    const validationResult = OrderValidation.instance.updateOrderEvent(params);
    if (validationResult.error) {
      throw new BadRequestError(validationResult.error.message);
    }

    // Find the order by its ID
    const order: OrderDocument | null = await OrderModel.findById(params.orderId);
    if (!order || !order?.event) {
      return { result: 0 };
    }

    // update order status
    order.status = params.status;

    const isDoneOrder = order.event.some(({ status }) => status === params.status);
    //insert orderEvent
    !isDoneOrder &&
      order.event.push({
        status: params.status,
        date: params.date || new Date(),
      });

    await order.save();

    return { result: 1 };
  } catch (error: any) {
    console.log(error);
    return { result: 0 };
  }
}

import OrderModel from '@/models/order.model';
import { OrderEvent, UpdateOrderEventParams, UpdateOrderEventResponse, User } from '@enigma-laboratory/shared';
import { OrderValidation } from '../validation';

import { CreateApplication } from '@/app';
import { BadRequestError } from '@/errors';

export async function updateOrderEvent(user: User, params: UpdateOrderEventParams): Promise<UpdateOrderEventResponse> {
  try {
    // Validate the input parameters
    const validationResult = OrderValidation.instance.updateOrderEvent(params);
    if (validationResult.error) {
      throw new BadRequestError(validationResult.error.message);
    }

    // Find the order by its ID
    const order = await OrderModel.findById(params.orderId);
    if (!order || !order?.event) {
      return { result: 0 };
    }

    // update order status
    order.status = params.status;

    const isDoneOrder = order.event
      .filter(({ userId }) => userId === user._id)
      .some(({ status }) => status === params.status);
    //insert orderEvent
    // !isDoneOrder &&
    order.event.push({
      status: params.status,
      date: params.date || new Date(),
      userId: user._id,
    });

    await order.save();

    CreateApplication.instance.broadcastEvent(OrderEvent.UPDATED, order);

    return { result: 1 };
  } catch (error: any) {
    console.log(error);
    return { result: 0 };
  }
}

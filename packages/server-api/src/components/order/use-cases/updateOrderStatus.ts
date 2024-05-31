import OrderModel from '@/models/order.model';
import { OrderEvent, UpdateOrderStatusParams, UpdateOrderStatusResponse, User } from '@enigma-laboratory/shared';
import { OrderValidation } from '../validation';

import { CreateApplication } from '@/app';
import { BadRequestError } from '@/errors';

export async function updateOrderStatus(
  user: User,
  params: UpdateOrderStatusParams,
): Promise<UpdateOrderStatusResponse> {
  try {
    // Validate the input parameters
    const validationResult = OrderValidation.instance.updateOrderStatus(params);
    if (validationResult.error) {
      throw new BadRequestError(validationResult.error.message);
    }

    // Find the order by its ID
    const order = await OrderModel.findById(params.orderId);
    if (!order || !order?.event) {
      return { result: 0 };
    }

    // update order status
    (order.usersStatus as unknown as Map<string, string>).set(user._id, params.status);

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

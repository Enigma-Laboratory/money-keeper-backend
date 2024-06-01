import { CreateApplication } from '@/app';
import { BadRequestError } from '@/errors';
import OrderModel from '@/models/order.model';
import {
  OrderEvent,
  UpdateManyOrderStatusesParams,
  UpdateManyOrderStatusesResponse,
  User,
} from '@enigma-laboratory/shared';
import mongoose from 'mongoose';
import { OrderValidation } from '../validation';

export async function updateOrderStatuses(
  user: User,
  params: UpdateManyOrderStatusesParams,
): Promise<UpdateManyOrderStatusesResponse> {
  const validationResult = OrderValidation.instance.updateOrderStatuses(params);
  if (validationResult.error) {
    throw new BadRequestError(validationResult.error.message);
  }
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const ordersToUpdate = [];
    for (const orderId of params.orderIds) {
      // Find the order by its ID
      const order = await OrderModel.findById(orderId);
      if (!order || !order?.event) {
        throw new Error(`Order with ID ${orderId} not found or has no events`);
      }

      // Update the order status
      (order.usersStatus as unknown as Map<string, string>).set(user._id, params.status);

      order.event.push({
        status: params.status,
        date: new Date(),
        userId: user._id,
      });

      ordersToUpdate.push(order);
    }

    // Save all orders concurrently
    await Promise.all(ordersToUpdate.map(order => order.save()));

    await session.commitTransaction();
    session.endSession();

    console.log(OrderEvent.ALL_UPDATED);

    // Broadcast the update event for all orders
    CreateApplication.instance.broadcastEvent(OrderEvent.ALL_UPDATED, { user, ordersToUpdate });

    return { result: 1 };
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    return { result: 0 };
  }
}

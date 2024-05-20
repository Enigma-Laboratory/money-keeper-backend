import OrderModel, { OrderDocument } from '@/models/order.model';
import {
  InternalServerError,
  Order,
  OrderEvent,
  OrderStatus,
  UpdateOneOrderParams,
  UpdateOneOrderResponse,
  uniqueUserIdsByProduct,
} from '@enigma-laboratory/shared';

import { CreateApplication } from '@/app';
import { BadRequestError, ConflictError } from '@/errors';
import { OrderValidation } from '../validation';

export async function updateOneOrder(params: UpdateOneOrderParams): Promise<UpdateOneOrderResponse> {
  try {
    const validate = OrderValidation.instance.updateOneOrderValidate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    const order = await findOrderById(params._id);

    const userIds = uniqueUserIdsByProduct(params.products || []);

    if (params.userId && !userIds.includes(params.userId)) {
      userIds.push(params.userId);
    }

    const usersStatus = generateUsersStatus(order, userIds);

    await updateOrderInDatabase(order, params as Order, usersStatus);

    CreateApplication.instance.broadcastEvent(OrderEvent.UPDATED, order);

    return order;
  } catch (error: any) {
    if (error instanceof BadRequestError || error instanceof ConflictError) {
      throw error;
    }
    throw new InternalServerError('An unexpected error occurred.');
  }
}

//#region

async function findOrderById(orderId: string) {
  const order = await OrderModel.findById(orderId);
  if (!order) throw new BadRequestError('Order not found.');
  return order;
}

function generateUsersStatus(order: Order, userIds: string[]): Map<string, OrderStatus> {
  // Create a new Map from the existing usersStatus
  const usersStatus = new Map<string, OrderStatus>(order.usersStatus as unknown as Map<string, OrderStatus>);

  // Iterate over the current usersStatus and remove users not in userIds
  for (const userId of usersStatus.keys()) {
    if (!userIds.includes(userId)) {
      usersStatus.delete(userId);
    }
  }

  // Add new userIds with the default status if they are not already present in usersStatus
  userIds.forEach(userId => {
    if (!usersStatus.has(userId)) {
      usersStatus.set(userId, OrderStatus.PROCESSING);
    }
  });

  return usersStatus;
}
async function updateOrderInDatabase(
  order: OrderDocument,
  params: Order,
  usersStatus: Map<string, OrderStatus>,
): Promise<void> {
  order.name = params.name;
  order.products = params.products;
  order.groupId = params.groupId;
  order.userId = params.userId;
  order.description = params?.description || '';
  order.usersStatus = usersStatus as any;
  await order.save();
}

//#endregion

import { BadRequestError } from '@/errors';
import OrderModel from '@/models/order.model';
import { FindAllOrderParams, FindAllOrderResponse, Order } from '../interface';
import { OrderValidation } from '../validation';

export async function getAllOrders(params: FindAllOrderParams): Promise<FindAllOrderResponse> {
  const validate = OrderValidation.instance.getAllOrderParams(params);

  if (validate.error) {
    throw new BadRequestError(validate.error.message);
  }
  try {
    const orders = await OrderModel.find().lean().exec();
    const transformedOrders: Order[] = orders.map(order => {
      return {
        id: order._id,
        orderName: order.orderName,
        userId: order.userId,
        createdAt: order.createdAt,
        updatedAt: order.updatedAt,
      };
    });

    return {
      count: orders.length,
      rows: transformedOrders,
    };
  } catch (error) {
    throw { error };
  }
}

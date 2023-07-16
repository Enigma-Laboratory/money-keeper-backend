import OrderModel from '../../../models/order.model';
import { FindAllOrderParams, FindAllOrderResponse, Order } from '../interface';

export async function getAllOrders(params: FindAllOrderParams): Promise<FindAllOrderResponse> {
  try {
    const orders = await OrderModel.find().lean().exec();

    const transformedOrders: Order[] = orders.map((order) => {
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
  } catch (e: any) {
    throw new Error(e);
  }
}

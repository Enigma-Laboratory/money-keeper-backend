import OrderModel from '../../../models/order.model';
import { FindOneOrderParams, FindOneOrderResponse, Order } from '../interface';

export async function getOneOrders(params: FindOneOrderParams): Promise<FindOneOrderResponse> {
  try {
    const order = await OrderModel.findById({
      _id: params.id,
    })
      .lean()
      .exec();

    if (order) {
      return {
        id: order._id,
        orderName: order.orderName,
        userId: order.userId,
        createdAt: order.createdAt,
        updatedAt: order.updatedAt,
      };
    }

    return {};
  } catch (e: any) {
    throw new Error(e);
  }
}

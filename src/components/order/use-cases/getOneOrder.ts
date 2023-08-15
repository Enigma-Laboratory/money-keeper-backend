import { BadRequestError } from '../../../../errors';
import OrderModel from '../../../models/order.model';
import { FindOneOrderParams, FindOneOrderResponse, Order } from '../interface';
import { OrderValidation } from '../validation';

export async function getOneOrders(params: FindOneOrderParams): Promise<FindOneOrderResponse> {
  try {
    const validate = OrderValidation.instance.getOneOrder(params);
    if (validate.error) {
      throw new BadRequestError(validate.error.message);
    }
    const order = await OrderModel.findById({ _id: params.id }).lean().exec();

    if (!order) throw new BadRequestError(`Can not get order with id = ${params.id}`);
    return {
      id: order._id,
      orderName: order.orderName,
      userId: order.userId,
      createdAt: order.createdAt,
      updatedAt: order.updatedAt,
    };
  } catch (error) {
    throw { error };
  }
}

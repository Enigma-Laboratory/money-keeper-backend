import { BadRequestError } from '../../../../errors';
import OrderModel from '../../../models/order.model';
import { FindOneOrderResponse, UpdateOrderParams } from '../interface';
import { OrderValidation } from '../validation';

export async function patchUpdateOneOrders(params: UpdateOrderParams): Promise<FindOneOrderResponse> {
  try {
    const validate = OrderValidation.instance.updateOrderParams(params);
    if (validate.error) {
      throw new BadRequestError(validate.error.message);
    }

    const { id: _id, ...orderParams } = params;

    const order = await OrderModel.findByIdAndUpdate(
      { _id }, // where by id
      { ...orderParams }, // update follow params Order
      { new: true }, // ensures that the updated customer object is returned
    )
      .lean()
      .exec();

    if (!order) throw new BadRequestError('Cannot update order ');

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

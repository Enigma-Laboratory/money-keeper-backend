import OrderModel from "../../../models/order.model";
import { FindOneOrderResponse, UpdateOrderParams } from "../interface";

export async function patchUpdateOneOrders(
  params: UpdateOrderParams
): Promise<FindOneOrderResponse> {
  try {
    const { id: _id, ...orderParams } = params;

    const order = await OrderModel.findByIdAndUpdate(
      {
        _id, // where by id
      },
      { ...orderParams }, // update follow params Order
      { new: true } // ensures that the updated customer object is returned
    )
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

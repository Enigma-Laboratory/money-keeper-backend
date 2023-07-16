import OrderDetailModel from "../../../models/order.detail.model";
import OrderModel from "../../../models/order.model";
import { DeleteOrderParams } from "../interface";
import logger from "../../../utils/logger";

export async function deleteOneOrder(params: DeleteOrderParams): Promise<any> {
  try {
    // Delete the order details associated with the order
    await OrderDetailModel.deleteMany({ orderId: params.id });

    // Delete the order
    const deletedOrder = await OrderModel.findByIdAndDelete(params.id);
    return deletedOrder;
  } catch (error: any) {
    logger.error("Error deleting order:", error);
    throw new Error(error);
  }
}

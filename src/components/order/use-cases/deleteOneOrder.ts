import OrderDetailModel from '../../../models/order.detail.model';
import OrderModel from '../../../models/order.model';
import { DeleteOrderParams } from '../interface';
import logger from '../../../utils/logger';
import { OrderValidation } from '../validation';
import { BadRequestError } from '../../../../errors';

export async function deleteOneOrder(params: DeleteOrderParams): Promise<any> {
  try {
    const validate = OrderValidation.instance.deleteOneOrder(params);

    if (validate.error) {
      throw new BadRequestError(validate.error.message);
    }
    // Delete the order details associated with the order
    await OrderDetailModel.deleteMany({ orderId: params.id });

    const deletedOrder = await OrderModel.findByIdAndDelete(params.id);
    if (!deletedOrder) throw new BadRequestError(`Can not delete order with id= ${params.id}`);
    return deletedOrder;
  } catch (error) {
    throw { error };
  }
}

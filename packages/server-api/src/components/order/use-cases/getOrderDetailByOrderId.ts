import { BadRequestError, ConflictError } from '@/errors';
import OrderDetailModel from '@/models/order.detail.model';
import { removeFieldsNotUse } from '@/shared/transformedData';
import { FindAllOrderDetailParams, FindAllOrderDetailResponse, OrderDetail } from '@enigma-laboratory/shared';
import { OrderValidation } from '../validation';

export async function getOrderDetailByOrderId(params: FindAllOrderDetailParams): Promise<FindAllOrderDetailResponse> {
  try {
    const validate = OrderValidation.instance.getAllOrderDetailByOrderIdValidate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    const orderDetail = await OrderDetailModel.find(params).lean().exec();
    const x: OrderDetail[] = orderDetail.map(_ => removeFieldsNotUse(_));
    return {
      count: orderDetail.length,
      rows: x,
    };
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

import { BadRequestError, ConflictError } from '@/errors';
import OrderDetailModel from '@/models/order.detail.model';
import { CreateOneOrderDetailParams } from '@enigma-laboratory/shared';
import { OrderDetailValidation } from '../validation';

export async function createOrderDetail(params: CreateOneOrderDetailParams): Promise<CreateOneOrderDetailParams> {
  try {
    const validate = OrderDetailValidation.instance.createOrderDetail(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    const orderDetail = await OrderDetailModel.create(params);
    return orderDetail.toJSON();
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

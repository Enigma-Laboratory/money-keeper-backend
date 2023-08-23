import { ConflictError } from '@/errors';
import OrderDetailModel from '@/models/order.detail.model';
import { CreateOneOrderParams, CreateOneOrderResponse } from '@/enigma-laboratory/sdk/order';
export async function createOrderDetail(params: CreateOneOrderParams): Promise<CreateOneOrderResponse> {
  try {
    const orderDetail = await OrderDetailModel.create(params);
    return orderDetail.toJSON();
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

import { BadRequestError, ConflictError } from '@/errors';
import OrderModel from '@/models/order.model';
import { OrderValidation } from '../validation';
import { CreateOneOrderParams, CreateOneOrderResponse } from '@/enigma-laboratory/sdk';
import { removeFieldsNotUse } from '@/shared/transformedData';
import OrderDetailModel from '@/models/order.detail.model';
import { startSession } from 'mongoose';

export async function postCreateOneOrderWithOrderDetail(params: CreateOneOrderParams): Promise<CreateOneOrderResponse> {
  const session = await startSession();
  session.startTransaction();
  try {
    const { orderDetails, userId, name, createdOrderAt } = params;

    const validate = OrderValidation.instance.createOneOrderValidate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    const order = await OrderModel.create({ userId, name, createdOrderAt }, { session });
    if (!order) throw new BadRequestError('Failed to create order.');

    const orderDetailPromises = (orderDetails || []).map(async orderDetail => {
      const createdOrderDetail = await OrderDetailModel.create({ ...orderDetail, orderId: order.id }, { session });
      return createdOrderDetail;
    });

    const createdOrderDetails = await Promise.all(orderDetailPromises);

    await session.commitTransaction();
    session.endSession();

    const resultOrder = removeFieldsNotUse(order);
    return { ...resultOrder, orderDetails: createdOrderDetails };
  } catch (error: any) {
    throw new ConflictError(error.message);
  }
}

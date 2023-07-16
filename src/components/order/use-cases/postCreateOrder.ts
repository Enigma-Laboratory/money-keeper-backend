import OrderModel from '../../../models/order.model';

export async function postCreateOrder(params: any): Promise<any> {
  try {
    const order = await OrderModel.create(params);
    return order.toJSON();
  } catch (e: any) {
    throw new Error(e);
  }
}

import OrderDetailModel from '../../../../models/order.detail.model';

export async function postCreateOrderDetail(params: any): Promise<any> {
  try {
    const orderDetail = await OrderDetailModel.create(params);
    return orderDetail.toJSON();
  } catch (e: any) {
    throw new Error(e);
  }
}

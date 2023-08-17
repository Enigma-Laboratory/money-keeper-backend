import OrderDetailModel from '@/models/order.detail.model';

export async function getAllOrderDetail(params: any): Promise<any> {
  try {
    const orderDetail = await OrderDetailModel.find(params);
    return orderDetail;
  } catch (e: any) {
    throw new Error(e);
  }
}
export async function postCreateOrderDetail(params: any): Promise<any> {
  try {
    const orderDetail = await OrderDetailModel.create(params);
    return orderDetail.toJSON();
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function putUpdateOrderDetail(params: any, body: any): Promise<any> {
  try {
    const orderDetail = await OrderDetailModel.findOneAndUpdate(params, body);
    return orderDetail;
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function deleteOneOrderDetail(id: string): Promise<any> {
  try {
    const orderDetail = await OrderDetailModel.findByIdAndRemove(id);
    return orderDetail;
  } catch (e: any) {
    throw new Error(e);
  }
}

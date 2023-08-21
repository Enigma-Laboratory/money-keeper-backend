import { getOneParams } from '@/interface';

export interface OrderDetail {
  id: string;
  orderId: string;
  product: string;
  quantity: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface GetOneOrderDetailParams extends getOneParams {}

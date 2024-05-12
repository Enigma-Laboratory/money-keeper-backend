import { FindAllParams, FindAllResponse, GetOneParams } from '../common';
import { Product } from '../product';
import { OrderStatus } from './order.types';

/** Represents an order entity with various properties. */
export interface Order {
  _id: string /** The unique identifier for the order. */;
  name: string /** The name of the order. */;
  userId: string;
  createdAt: Date /** The timestamp when the order was created. */;
  updatedAt: Date /** The timestamp when the order was last updated. */;
  createdOrderAt: Date;
  status: OrderStatus;
  products: Product[];
  event: LogOrderEvent[];
  groupId: string;
  orderNumber: string;
  description?: string;
}

export interface LogOrderEvent {
  date: Date;
  status: OrderStatus;
  userId: string;
}

/** Represents the parameters for finding a single order. */
export interface FindOneOrderParams extends GetOneParams {}

/** Represents the response structure for finding a single order. */
export interface FindOneOrderResponse extends Partial<Order> {}

/** Represents the parameters for finding multiple orders. */
export interface FindAllOrderParams extends FindAllParams {
  startDate?: Date;
  endDate?: Date;
  month?: number;
  groupId?: string;
}

/** Represents the response structure for finding multiple orders. */
export interface FindAllOrderResponse extends FindAllResponse<Order> {}

/** Represents the parameters for creating a new order. */
export interface CreateOneOrderParams
  extends Omit<Order, '_id' | 'createdAt' | 'orderNumber' | 'updatedAt' | 'status' | 'event'> {}

/** Represents the response structure for finding multiple orders.  */
export interface CreateOneOrderResponse extends Order {}

/** Represents the parameters for updating an order. */
export interface UpdateOneOrderParams extends Partial<Order> {}

export interface UpdateOrderEventParams extends LogOrderEvent {
  orderId: string;
}

export interface UpdateOrderEventResponse {
  result: number;
}

/** Represents the parameters for response an order. */
export interface UpdateOneOrderResponse extends Order {}

/** Represents the parameters for deleting an order. */
export interface DeleteOneOrderParams extends GetOneParams {}

/** Represents the response structure for deleting an order. */
export interface DeleteOneOrderResponse {
  result: number;
}

export interface DailyOrderParams {
  orderBy: 'week' | 'mouth' | 'year';
}

export interface DailyOrderResponse {}

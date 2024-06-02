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
  usersStatus: { [userId: string]: OrderStatus };
  products: Product[];
  event: LogOrderEvent[];
  groupId: string;
  orderNumber: number;
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
  extends Omit<Order, '_id' | 'createdAt' | 'orderNumber' | 'updatedAt' | 'usersStatus' | 'event'> {}

/** Represents the response structure for finding multiple orders.  */
export interface CreateOneOrderResponse extends Order {}

/** Represents the parameters for updating an order. */
export interface UpdateOneOrderParams extends FindOneOrderParams, Partial<Omit<Order, '_id'>> {}

export interface UpdateOrderStatusParams extends LogOrderEvent {
  orderId: string;
}

export interface UpdateOrderStatusResponse {
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

/**
 * Parameters for updating the statuses of multiple orders.
 */
export interface UpdateManyOrderStatusesParams {
  /**
   * An array of order IDs to be updated.
   * @example ["60d0fe4f5311236168a109ca", "60d0fe4f5311236168a109cb"]
   */
  orderIds: string[];

  /**
   * The new status to be applied to the orders.
   */
  status: OrderStatus;

  /**
   * The date of the status update. If not provided, the current date will be used.
   * @example "2024-06-01T00:00:00Z"
   */
  date?: Date;
}

/**
 * Response for updating the statuses of multiple orders.
 */
export interface UpdateManyOrderStatusesResponse {
  /**
   * The result of the update operation.
   * 1 indicates success, 0 indicates failure.
   * @example 1
   */
  result: number;
}

/**
 * Specifies the parameters required for finding all daily order revenues.
 */
export interface FindAllDailyOrderRevenueParams extends Required<Pick<FindAllParams, 'start' | 'end'>> {
  /**
   * Optional group ID for filtering.
   */
  groupId?: string;
}

/**
 * Represents the response structure for finding all daily order revenues.
 */
export interface FindAllDailyOrderRevenueResponse {
  /**
   * An array containing daily revenue data.
   */
  data: { date: Date; value: number }[];

  /**
   * Total revenue across all days.
   */
  total: number;

  /**
   * Trend of revenue over time.
   */
  trend: number;
}

/**
 * Specifies the parameters required for finding all daily orders.
 */
export interface FindAllDailyOrderParams extends Required<Pick<FindAllParams, 'start' | 'end'>> {
  /**
   * Optional group ID for filtering.
   */
  groupId?: string;
}

/**
 * Represents the response structure for finding all daily orders.
 */
export interface FindAllDailyOrderResponse {
  /**
   * An array containing daily order data.
   */
  data: { date: Date; value: number }[];

  /**
   * Total number of orders across all days.
   */
  total: number;

  /**
   * Trend of orders over time.
   */
  trend: number;
}

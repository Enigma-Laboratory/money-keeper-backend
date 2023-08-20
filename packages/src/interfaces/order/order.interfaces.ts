import { FindAllParams, FindAllResponse, GetOneParams } from '../common';

/** Represents an order entity with various properties. */
export interface Order {
  id: string /** The unique identifier for the order. */;
  orderName: string /** The name of the order. */;
  userId: string /** The ID of the user associated with the order. */;
  createdAt: Date /** The timestamp when the order was created. */;
  updatedAt: Date /** The timestamp when the order was last updated. */;
}

/** Represents the parameters for deleting an order. */
export interface DeleteOrderParams extends GetOneParams {}

/** Represents the response structure for deleting an order. */
export interface DeleteOrderResponse {
  number: boolean;
}

/** Represents the parameters for finding a single order. */
export interface FindOneOrderParams extends GetOneParams {}

/** Represents the response structure for finding a single order. */
export interface FindOneOrderResponse extends Partial<Order> {}

/** Represents the parameters for finding multiple orders. */
export interface FindAllOrderParams extends Partial<Order>, FindAllParams {}

/** Represents the response structure for finding multiple orders. */
export interface FindAllOrderResponse extends FindAllResponse<Order> {}

/** Represents the parameters for updating an order. */
export interface UpdateOrderParams extends Partial<Order> {}

/** Represents the parameters for response an order. */
export interface UpdateOrderResponse extends Order {}

/** Represents the parameters for creating a new order. */
export interface CreateOneOrderParams extends Pick<Order, 'orderName' | 'userId'> {}

/** Represents the response structure for finding multiple orders.  */
export interface CreateOneOrderResponse extends Order {}

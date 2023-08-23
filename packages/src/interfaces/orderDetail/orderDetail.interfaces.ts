import { FindAllParams, FindAllResponse, GetOneParams } from '../common';

/** Represents an order entity with various properties. */

export interface OrderDetail {
  id: string /** The unique identifier for the order detail. */;
  orderId: string /** The ID of the order associated with the order detail. */;
  name: string /** The name of the order detail. */;
  description?: string /** The description of order detail. */;
  price: number /** The price of order detail. */;
  createdAt: Date /** The timestamp when the order detail was created. */;
  updatedAt: Date /** The timestamp when the order detail was last updated. */;
}

/** Represents the parameters for finding a single order detail. */
export interface FindOneOrderDetailParams extends GetOneParams {}

/** Represents the response structure for finding a single order detail. */
export interface FindOneOrderDetailResponse extends Partial<OrderDetail> {}

/** Represents the parameters for finding multiple orders detail. */
export interface FindAllOrderDetailParams extends Partial<OrderDetail>, FindAllParams {}

/** Represents the response structure for finding multiple order details. */
export interface FindAllOrderDetailResponse extends FindAllResponse<OrderDetail> {}

/** Represents the parameters for finding multiple orders detail. */
export interface FindAllOrderDetailByOrderIdParams extends Partial<OrderDetail> {}

/** Represents the response structure for finding multiple order details. */
export interface FindAllOrderDetailByOrderIdResponse extends FindAllResponse<OrderDetail> {}

/** Represents the parameters for creating a new order detail. */
export interface CreateOneOrderDetailParams extends Pick<OrderDetail, 'name' | 'orderId' | 'price' | 'description'> {}

/** Represents the response structure for finding multiple order details.  */
export interface CreateOneOrderDetailResponse extends OrderDetail {}

/** Represents the parameters for updating an order detail. */
export interface UpdateOneOrderDetailParams extends Partial<OrderDetail> {}

/** Represents the parameters for response an order detail. */
export interface UpdateOneOrderDetailResponse extends OrderDetail {}

/** Represents the parameters for deleting an order detail. */
export interface DeleteOneOrderDetailParams extends GetOneParams {}

/** Represents the response structure for deleting an order detail. */
export interface DeleteOneOrderDetailResponse {
  result: boolean | undefined;
}

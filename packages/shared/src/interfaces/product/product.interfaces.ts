import { FindAllParams, FindAllResponse, GetOneParams } from '../common';

/** Represents a product entity with various properties. */
export interface Product {
  _id: string /** The unique identifier for the product. */;
  name: string /** The name of the product. */;
  quantity: number;
  isActive?: boolean;
  user: string /** The user associated with the product. */;
  description?: string /** The description of the product. */;
  price: number /** The price of the product. */;
  image?: string /** The URL of the product's image (optional). */;
  createdAt: Date /** The timestamp when the product was created. */;
  updatedAt: Date /** The timestamp when the product was last updated. */;
  note?: string;
}

/** Represents the parameters for creating a new product. */
export interface CreateProductParams extends Partial<Product> {}

/** Represents the response structure for creating a new product. */
export interface CreateProductResponse extends Product {}

/** Represents the parameters for finding a single product. */
export interface FindOneProductParams extends GetOneParams {}

/** Represents the response structure for finding a single product. */
export interface FindOneProductResponse extends Product {}

/** Represents the parameters for finding multiple products. */
export interface FindAllProductParams extends FindAllParams {}

/** Represents the response structure for finding multiple products. */
export interface FindAllProductResponse extends FindAllResponse<Product> {}

/** Represents the parameters for deleting a single product. */
export interface DeleteProductOneParams extends GetOneParams {}

/** Represents the response structure for deleting a single product. */
export interface DeleteOneProductResponse {
  result: number /** The number of affected rows in the database. */;
}

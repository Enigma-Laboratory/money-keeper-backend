import { FindAllParams, FindAllResponse, GetOneParams } from '../common';

/** Represents a product entity with various properties. */
export interface Product {
  id: string /** The unique identifier for the product. */;
  user: string /** The user associated with the product. */;
  name: string /** The name of the product. */;
  description: string /** The description of the product. */;
  price: string /** The price of the product. */;
  imageUrl?: string /** The URL of the product's image (optional). */;
  createdAt: Date /** The timestamp when the product was created. */;
  updatedAt: Date /** The timestamp when the product was last updated. */;
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
export interface DeleteProductOneResponse {
  number: number /** The number of affected rows in the database. */;
}
import { FindAllParams, FindAllResponse, getOneParams } from '@/interface';
import { Product, ProductDocument } from '@/models/product.model';

export interface ProductParams extends Product {}
export interface CreateProductResponse extends ProductDocument {}

export interface FindOneProductResponse extends ProductDocument {}

export interface FindAllProductParams extends FindAllParams {}

export interface FindAllProductResponse extends FindAllResponse<ProductDocument> {}

export interface GetOneProductParams extends getOneParams {}

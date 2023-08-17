import ProductModel, { Product } from '@/models/product.model';
import { CreateProductResponse } from '../interface';

export async function postCreateProduct(params: Product): Promise<CreateProductResponse> {
  try {
    const product = await ProductModel.create(params);
    return product.toJSON();
  } catch (e: any) {
    throw new Error(e);
  }
}

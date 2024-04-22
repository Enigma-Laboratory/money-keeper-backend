import ProductModel from '@/models/product.model';
import { ConflictError } from '@/errors';
import { FindAllProductParams, FindAllProductResponse, Product } from '@/enigma-laboratory/sdk';
import { removeFieldsNotUse } from '@/shared/transformedData';

export async function getAllProducts(params: FindAllProductParams): Promise<FindAllProductResponse> {
  try {
    const products = await ProductModel.find(params);
    return {
      count: products.length,
      rows: products as any[],
    };
  } catch (error: any) {
    throw new ConflictError(error);
  }
}

import { omit } from 'lodash';
import ProductModel from '@/models/product.model';
import { FindOneProductParams, FindOneProductResponse } from '@/enigma-laboratory/sdk';

export async function getOneProduct(params: FindOneProductParams): Promise<FindOneProductResponse> {
  try {
    const product = await ProductModel.findOne(params);
    return omit(product?.toJSON(), ['_id', '__v']);
  } catch (e: any) {
    throw new Error(e);
  }
}

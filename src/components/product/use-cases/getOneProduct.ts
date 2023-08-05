import { omit } from 'lodash';
import ProductModel from '../../../models/product.model';
import { FindOneProductResponse, GetOneProductParams } from '../interface';

export async function getOneProduct(params: GetOneProductParams): Promise<FindOneProductResponse> {
  try {
    const product = await ProductModel.findOne(params);
    return omit(product?.toJSON(), ['_id', '__v']);
  } catch (e: any) {
    throw new Error(e);
  }
}

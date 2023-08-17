import ProductModel from '@/models/product.model';
import { omit } from 'lodash';
import { FindAllProductParams, FindAllProductResponse } from '../interface';

export async function getAllProducts(params: FindAllProductParams): Promise<FindAllProductResponse> {
  try {
    const products = await ProductModel.find();
    return {
      count: products.length,
      rows: omit(products, 'title'),
    };
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function putUpdateOneProduct(id: any, body: any): Promise<any> {
  try {
    const products = await ProductModel.findOneAndUpdate({ _id: id }, body);
    return products;
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function deleteOneOrderDetail(id: string): Promise<any> {
  try {
    const products = await ProductModel.findByIdAndRemove({ _id: id });
    return products;
  } catch (e: any) {
    throw new Error(e);
  }
}

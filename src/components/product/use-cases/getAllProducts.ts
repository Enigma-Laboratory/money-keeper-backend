import { omit } from "lodash";
import ProductModel from "../../../models/product.model";
import { FindAllProductParams, FindAllProductResponse } from "../interface";

export async function getAllProducts(
  params: FindAllProductParams
): Promise<FindAllProductResponse> {
  try {
    const products = await ProductModel.find();
    return {
      count: products.length,
      rows: omit(products, "title"),
    };
  } catch (e: any) {
    throw new Error(e);
  }
}

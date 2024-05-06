import { BadRequestError, ConflictError } from '@/errors';
import ProductModel from '@/models/product.model';
import { CreateProductResponse, FindOneProductParams } from '@enigma-laboratory/shared';
import { ProductValidation } from '../validation';

export async function postCreateProduct(params: FindOneProductParams): Promise<CreateProductResponse> {
  try {
    const validate = ProductValidation.instance.postCreateProductValidate(params);
    if (validate.error) throw new BadRequestError(validate.error.message);

    const product = await ProductModel.create(params);
    return product.toJSON();
  } catch (error: any) {
    throw new ConflictError(error);
  }
}

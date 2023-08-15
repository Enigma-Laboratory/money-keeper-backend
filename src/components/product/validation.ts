import Joi, { ValidationResult } from 'joi';
import { FindAllProductParams, GetOneProductParams } from './interface';

export class ProductValidation {
  private static _instance: ProductValidation;

  public static get instance(): ProductValidation {
    if (!ProductValidation._instance) {
      this._instance = new ProductValidation();
    }
    return this._instance;
  }

  public postCreateProductValidate(params: any): ValidationResult<any> {
    const schema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      image: Joi.string().required(),
    });
    return schema.validate(params);
  }

  public getOneProductValidate(params: GetOneProductParams): ValidationResult<GetOneProductParams> {
    const schema = Joi.object({
      id: Joi.string().required(),
    });
    return schema.validate(params);
  }

  public getAllProductValidate(params: Partial<FindAllProductParams>): ValidationResult<FindAllProductParams> {
    const schema = Joi.object({
      scope: Joi.string(),
      page: Joi.number(),
      pageSize: Joi.number(),
      sorters: Joi.array().items(Joi.string()),
    });
    return schema.validate(params);
  }

  public putUpdateProductValidate(params: any): ValidationResult<any> {
    const schema = Joi.object({
      title: Joi.string(),
      description: Joi.string(),
      image: Joi.string(),
    });
    return schema.validate(params);
  }

  public deleteOneOrderDetail(params: any): ValidationResult<any> {
    const schema = Joi.object({
      id: Joi.string(),
    });
    return schema.validate(params);
  }
}

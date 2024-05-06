import { BadRequestError } from '@/errors';
import logger from '@/utils/logger';
import { NextFunction, Request, Response } from 'express';
import * as ProductUseCases from './use-cases';
import { ProductValidation } from './validation';

export async function createProductHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const product = await ProductUseCases.postCreateProduct(req.body);
    return res.send(product);
  } catch (error: any) {
    next(error);
  }
}

export async function getOneProductHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const params = req.params;
    const validate = ProductValidation.instance.getOneProductValidate(params as any);
    if (validate.error) throw new BadRequestError(validate.error.message);

    const product = await ProductUseCases.getOneProduct(params as any);
    return res.send(product);
  } catch (error: any) {
    next(error);
  }
}

export async function getAllProductHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const params = req.params;
    const validate = ProductValidation.instance.getAllProductValidate(params);
    if (validate.error) {
      logger.error(`not get product by ${validate.error.message} `);
      return res.status(409).send(validate.error.message);
    }
    const product = await ProductUseCases.getAllProducts(params);
    return res.send(product);
  } catch (error: any) {
    next(error);
  }
}

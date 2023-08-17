import { Request, Response } from 'express';
import { ProductValidation } from './validation';
import * as ProductUseCases from './use-cases';
import logger from '@/utils/logger';

export async function createProductHandler(req: Request, res: Response) {
  try {
    const params = req.body;
    const validate = ProductValidation.instance.postCreateProductValidate(params);
    if (validate.error) {
      logger.error(`not create product by ${validate.error.message} `);
      return res.status(409).send(validate.error.message);
    }
    const product = await ProductUseCases.postCreateProduct(params);
    return res.send(product);
  } catch (e: any) {
    logger.error(`Create product ${e}`);
    return res.status(409).send(e.message);
  }
}

export async function getOneProductHandler(req: Request, res: Response) {
  try {
    const params = req.params;
    const validate = ProductValidation.instance.getOneProductValidate(params);
    if (validate.error) {
      logger.error(`not get product by ${validate.error.message} `);
      return res.status(409).send(validate.error.message);
    }
    const product = await ProductUseCases.getOneProduct(params);
    return res.send(product);
  } catch (e: any) {
    logger.error(`get product fail at : ${e}`);
    return res.status(409).send(e.message);
  }
}

export async function getAllProductHandler(req: Request, res: Response) {
  try {
    const params = req.params;
    const validate = ProductValidation.instance.getAllProductValidate(params);
    if (validate.error) {
      logger.error(`not get product by ${validate.error.message} `);
      return res.status(409).send(validate.error.message);
    }
    const product = await ProductUseCases.getAllProducts(params);
    return res.send(product);
  } catch (e: any) {
    logger.error(`get product fail at : ${e}`);
    return res.status(409).send(e.message);
  }
}

export async function updateOneProductHandler(req: Request, res: Response) {
  try {
    const body = req.body;
    const id = req.url.match(/\/(.*?)\//)![1];

    const validate = ProductValidation.instance.putUpdateProductValidate(body);
    if (validate.error) {
      logger.error(`not get product by ${validate.error.message} `);
      return res.status(409).send(validate.error.message);
    }
    const product = await ProductUseCases.putUpdateOneProduct(id, body);
    return res.send(product);
  } catch (e: any) {
    logger.error(`get product fail at : ${e}`);
    return res.status(409).send(e.message);
  }
}

export async function deleteOneProductHandler(req: Request, res: Response) {
  try {
    const id = req.url.replace('/', '');

    const validate = ProductValidation.instance.deleteOneOrderDetail({ id });
    if (validate.error) {
      logger.error(`not delete product by ${validate.error.message} `);
      return res.status(409).send(validate.error.message);
    }
    const product = await ProductUseCases.deleteOneOrderDetail(id);
    return res.send(product);
  } catch (e: any) {
    logger.error(`delete product fail at : ${e}`);
    return res.status(409).send(e.message);
  }
}

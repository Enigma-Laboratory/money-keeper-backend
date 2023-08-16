import express from 'express';
import * as ProductComponent from '../../../components/product';

const route = express.Router();

/**
 * @openapi
 * /product/create:
 *   post:
 *     tags:
 *       - product
 *     description: description
 *     summary: Create Product
 *     operationId: CreateProduct
 *     requestBody:
 *       description: requestBody description
 *     responses:
 *       200:
 *         description: responses description
 */
route.post('/create', ProductComponent.createProductHandler);

/**
 * @openapi
 * /product/create:
 *   post:
 *     tags:
 *       - product
 *     description: Get One Product
 *     summary: Create Product
 *     operationId: GetOneProduct
 *     requestBody:
 *       description: requestBody description
 *     responses:
 *       200:
 *         description: responses description
 */
route.get('/get-one-product/:id', ProductComponent.getOneProductHandler);

/**
 * @openapi
 * /product/{id}/edit:
 *   post:
 *     tags:
 *       - product
 *     description: description
 *     summary: Update One Product
 *     operationId: UpdateOneProject
 *     requestBody:
 *       description: requestBody description
 *     responses:
 *       200:
 *         description: responses description
 */
route.put('/:id/edit', ProductComponent.updateOneProductHandler);

/**
 * @openapi
 * /product/create:
 *   delete:
 *     tags:
 *       - product
 *     description: description
 *     summary: Delete One Product
 *     operationId: DeleteOneProduct
 *     requestBody:
 *       description: requestBody description
 *     responses:
 *       200:
 *         description: responses description
 */
route.delete('/:id', ProductComponent.deleteOneProductHandler);

/**
 * @openapi
 * /product:
 *   get:
 *     tags:
 *       - product
 *     description: description
 *     summary: Get All Product
 *     operationId: GetAllProduct
 *     requestBody:
 *       description: requestBody description
 *     responses:
 *       200:
 *         description: responses description
 */
route.get('/', ProductComponent.getAllProductHandler);
export default route;

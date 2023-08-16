import express from 'express';
import * as OrderComponent from '../../../components/order';
import OrderDetailRoute from '../orderDetail/orderDetailRoutes';

const route = express.Router();
route.use('/detail', OrderDetailRoute);

/**
 * @openapi
 * /order/get-one-order/{id}:
 *   get:
 *     tags:
 *       - order
 *     description: description
 *     summary: Get One Order
 *     operationId:  GetOneOrder
 *     requestBody:
 *       description: requestBody description
 *     responses:
 *       200:
 *         description: responses description
 */
route.get('/get-one-order/:id', OrderComponent.getOneOrderHandler);

/**
 * @openapi
 * /order/create-order:
 *   post:
 *     tags:
 *       - order
 *     description: description
 *     summary: Create One Order
 *     operationId:  CreateOneOrder
 *     requestBody:
 *       description: requestBody description
 *     responses:
 *       200:
 *         description: responses description
 */
route.post('/create-order', OrderComponent.postCreateOneOrderHandler);

/**
 * @openapi
 * /order/delete-order/{id}:
 *   delete:
 *     tags:
 *       - order
 *     description: description
 *     summary: Delete One Order
 *     operationId:  DeleteOneOrder
 *     requestBody:
 *       description: requestBody description
 *     responses:
 *       200:
 *         description: responses description
 */
route.delete('/delete-order/:id', OrderComponent.deleteOneOrderHandler);

/**
 * @openapi
 * /order/update-order:
 *   patch:
 *     tags:
 *       - order
 *     description: description
 *     summary: Get One Order
 *     operationId:  GetOneOrder
 *     requestBody:
 *       description: requestBody description
 *     responses:
 *       200:
 *         description: responses description
 */
route.patch('/update-order', OrderComponent.patchOneOrderHandler);

/**
 * @openapi
 * /order:
 *   get:
 *     tags:
 *       - order
 *     description: description
 *     summary: Get One Order
 *     operationId:  GetOneOrder
 *     requestBody:
 *       description: requestBody description
 *     responses:
 *       200:
 *         description: responses description
 */
route.get('/', OrderComponent.getAllOrderHandler);

export default route;

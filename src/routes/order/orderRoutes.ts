import express from 'express';
import * as OrderComponent from '../../components/order';
import OrderDetailRoute from './detail/orderDetailRoutes';

const route = express.Router();
route.use('/detail', OrderDetailRoute);

/**
 * get /order
 * @summary get all order
 *
 * @tags Order
 *
 * @security BearerAuth
 *
 * @param {string} id - The unique id of order
 **
 * @return {Order} 200 - Return order by id - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.get('/', OrderComponent.getAllOrderHandler);

/**
 * get /order/get-one-order/{id}
 * @summary get one  order
 *
 * @tags Order
 *
 * @security BearerAuth
 *
 * @param {string} id - The unique id of order
 **
 * @return {Order} 200 - Return order by id - application/json
 * @return {Error} default - Unexpected error - application/json
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
 * delete /order
 * @summary delete one order
 *
 * @tags Order
 *
 * @security BearerAuth
 *
 * @param {Order}
 **
 * @return {Order} 200 - Return order when deleted - application/json
 * @return {Error} default - Unexpected error - application/json
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

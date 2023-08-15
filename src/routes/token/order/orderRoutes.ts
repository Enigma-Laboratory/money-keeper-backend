import express from 'express';
import * as OrderComponent from '../../../components/order';
import OrderDetailRoute from '../orderDetail/orderDetailRoutes';

const route = express.Router();
route.use('/detail', OrderDetailRoute);

/**
 * get /order/get-one-order/:id
 * @summary get one order
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
 * post /order
 * @summary post create order
 *
 * @tags Order
 *
 * @security BearerAuth
 *
 * @param {Order}
 **
 * @return {Order} 200 - Return order when created - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.post('/create-order', OrderComponent.postCreateOneOrderHandler);

/**
 * post /order/create-order
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
 * patch update order
 * @summary patch update one order
 *
 * @tags Order
 *
 * @security BearerAuth
 *
 * @param {Order} optional Order model
 **
 * @return {Order} 200 - Return order when updated - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.patch('/update-order', OrderComponent.patchOneOrderHandler);

/**
 * get /order
 * @summary get all order
 *
 * @tags Order
 *
 * @security BearerAuth
 **
 * @return {Order} 200 - Return order by id - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.get('/', OrderComponent.getAllOrderHandler);

export default route;

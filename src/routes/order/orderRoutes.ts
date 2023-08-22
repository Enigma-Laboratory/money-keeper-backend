import express from 'express';
import * as OrderComponent from '@/components/order';

const route = express.Router();

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
route.patch('/update-order', OrderComponent.patchOneOrderHandler);

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
route.get('/:id', OrderComponent.getOneOrderHandler);

/**
 * delete /orders/:id
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
route.delete('/:id', OrderComponent.deleteOneOrderHandler);

/**
 * post /order
 * @summary get one order
 *
 * @tags Order
 *
 * @security BearerAuth
 *
 **
 * @return {Order} 200 - Return order by id - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.post('/', OrderComponent.postCreateOneOrderHandler);

/**
 * get /order
 * @summary Get list of all orders
 *
 * @tags Order
 *
 * @security BearerAuth
 *
 **
 * @return {Order} 200 - Return order by id - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.get('/', OrderComponent.getAllOrderHandler);

export default route;

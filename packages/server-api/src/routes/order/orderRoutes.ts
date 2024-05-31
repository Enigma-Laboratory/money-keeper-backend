import * as OrderComponent from '@/components/order';
import express from 'express';

const route = express.Router();

/**
 * get /order/{id}/details
 * @summary get all order detail by order id
 *
 * @tags Order
 *
 * @security BearerAuth
 **
 * @return {FindAllOrderDetailByOrderIdResponse} 200 - Return list of order details by id - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.get('/:id/details', OrderComponent.getOrderDetailByOrderIdHandler);

/**
 * get /order/{id}
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
route.get('/:id', OrderComponent.getOneOrderHandler);

/**
 * put /order
 * @summary update one order
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
route.put('/', OrderComponent.updateOneOrderHandler);

/**
 * put /order
 * @summary update one order event
 *
 * @tags OrderEvent
 *
 * @security BearerAuth
 *
 * @param {OrderEvent}
 **
 * @return {Result} 200 - Return order when deleted - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.put('/order-status', OrderComponent.updateOrderEventHandler);

/**
 * PUT /order-statuses
 * @summary Update the statuses of multiple orders
 *
 * @tags OrderEvent
 *
 * @security BearerAuth
 *
 * @param {UpdateMultipleOrderEventsParams} request.body.required - Multiple order status update parameters
 *
 * @return {UpdateOrderEventResponse} 200 - Success response
 * @return {Error} 400 - Validation error
 * @return {Error} 500 - Unexpected error
 */
route.put('/order-statuses', OrderComponent.updateOrderEventsHandler);

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
route.post('/', OrderComponent.createOneOrderHandler);

/**
 * get /order
 * @summary Get list of all orders
 *
 * @tags Order
 *
 * @security BearerAuth
 *
 **
 * @return {Order} 200 - Return order - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.get('/', OrderComponent.getAllOrderHandler);

export default route;

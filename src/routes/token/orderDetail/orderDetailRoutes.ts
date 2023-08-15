import express from 'express';
import * as OrderDetailComponent from '../../../components/orderDetail';

const route = express.Router();

/**
 *  /order-detail/create
 * @summary create order detail
 *
 * @tags Order Detail
 *
 * @security BearerAuth
 **
 * @return {Order} 200 - Return list order detail - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.post('/create', OrderDetailComponent.postCreateOrderDetailHandler);

/**
 *  /order-detail/:id/edit
 * @summary edit order detail
 *
 * @tags Order Detail
 *
 * @security BearerAuth
 **
 * @return {Order} 200 - Return list order detail - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.put('/:id/edit', OrderDetailComponent.putUpdateOrderDetailHandler);

/**
 *  /order-detail/:id
 * @summary delete one order detail
 *
 * @tags Order Detail
 *
 * @security BearerAuth
 **
 * @return {Order} 200 - Return list order detail - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.delete('/:id', OrderDetailComponent.deleteOrderDetailHandler);

/**
 * get /order-detail
 * @summary get all order detail
 *
 * @tags Order Detail
 *
 * @security BearerAuth
 **
 * @return {Order} 200 - Return list order detail - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.get('/', OrderDetailComponent.getAllOrderDetailHandler);

export default route;

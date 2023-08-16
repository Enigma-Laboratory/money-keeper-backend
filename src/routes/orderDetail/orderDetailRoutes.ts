import express from 'express';
import * as OrderDetailComponent from '@/components/orderDetail';

const route = express.Router();

/**
 * @openapi
 * /order-detail/create:
 *   post:
 *     tags:
 *       - order detail
 *     description: description
 *     summary: Create Order Detail
 *     operationId: CreateOrderDetail
 *     requestBody:
 *       description: requestBody description
 *     responses:
 *       200:
 *         description: responses description
 */
route.post('/create', OrderDetailComponent.postCreateOrderDetailHandler);

/**
 * @openapi
 * /order-detail/{id}/edit:
 *   put:
 *     tags:
 *       - order detail
 *     description: description
 *     summary: Update One Order Detail
 *     operationId: UpdateOneOrderDetail
 *     requestBody:
 *       description: requestBody description
 *     responses:
 *       200:
 *         description: responses description
 */
route.put('/:id/edit', OrderDetailComponent.putUpdateOrderDetailHandler);

/**
 * @openapi
 * /order-detail/{id}:
 *   delete:
 *     tags:
 *       - order detail
 *     description: description
 *     summary: Delete Order Detail
 *     operationId: DeleteOrderDetail
 *     requestBody:
 *       description: requestBody description
 *     responses:
 *       200:
 *         description: responses description
 */
route.delete('/:id', OrderDetailComponent.deleteOrderDetailHandler);

/**
 * @openapi
 * /order-detail/create:
 *   get:
 *     tags:
 *       - order detail
 *     description: description
 *     summary: Create Order Detail
 *     operationId: CreateOrderDetail
 *     requestBody:
 *       description: requestBody description
 *     responses:
 *       200:
 *         description: responses description
 */
route.get('/', OrderDetailComponent.getAllOrderDetailHandler);

export default route;

import * as OrderDetailComponent from '@/components/orderDetail';
import express from 'express';

const route = express.Router();

route.get('/:id', OrderDetailComponent.getOneOrderDetailHandler);

route.post('/', OrderDetailComponent.createOneOrderDetailHandler);

route.put('/', OrderDetailComponent.updateOrderDetailHandler);

route.delete('/', OrderDetailComponent.deleteOneOrderDetailHandler);

route.get('/', OrderDetailComponent.getAllOrderDetailHandler);

export default route;

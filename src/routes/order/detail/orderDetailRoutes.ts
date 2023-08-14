import express from 'express';
import * as OrderDetailComponent from '../../../components/order/orderDetail';

const route = express.Router();

route.post('/create', OrderDetailComponent.postCreateOrderDetailHandler);

export default route;

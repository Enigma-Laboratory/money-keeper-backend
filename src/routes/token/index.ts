import { Express } from 'express';
import SessionRoute from './session/sessionRoutes';
import ProductRoute from './product/productRoutes';
import OrderRoute from './order/orderRoutes';
import OrderDetailRoute from './orderDetail/orderDetailRoutes';
import CustomerRoute from './customer/customerRoutes';
import express from 'express';
import { deserializeUser } from '../../middleware';

const route = express.Router();

route.use(deserializeUser);
route.use('/session', SessionRoute);
route.use('/product', ProductRoute);
route.use('/order', OrderRoute);
route.use('/order-detail', OrderDetailRoute);
route.use('/customer', CustomerRoute);
export default route;

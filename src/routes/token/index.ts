import { deserializeUser } from '@/middleware';
import express from 'express';
import OrderRoute from './order/orderRoutes';
import OrderDetailRoute from './orderDetail/orderDetailRoutes';
import ProductRoute from './product/productRoutes';
import SessionRoute from './session/sessionRoutes';
import UserRoute from './user/userRoutes';

const route = express.Router();

route.use(deserializeUser);
route.use('/session', SessionRoute);
route.use('/product', ProductRoute);
route.use('/order', OrderRoute);
route.use('/order-detail', OrderDetailRoute);
route.use('/user', UserRoute);
export default route;

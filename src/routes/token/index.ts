import SessionRoute from './session/sessionRoutes';
import ProductRoute from './product/productRoutes';
import OrderRoute from './order/orderRoutes';
import OrderDetailRoute from './orderDetail/orderDetailRoutes';
import UserRoute from './user/userRoutes';
import express from 'express';
import { deserializeUser } from '../../middleware';

const route = express.Router();

route.use(deserializeUser);
route.use('/session', SessionRoute);
route.use('/product', ProductRoute);
route.use('/order', OrderRoute);
route.use('/order-detail', OrderDetailRoute);
route.use('/user', UserRoute);
export default route;
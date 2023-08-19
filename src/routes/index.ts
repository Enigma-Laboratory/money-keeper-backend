import { deserializeUser } from '@/middleware';
import SwaggerUI from '@/services/api-doc';
import { Express } from 'express';
import AuthRoute from './auth/authRoutes';
import OrderRoute from './order/orderRoutes';
import OrderDetailRoute from './orderDetail/orderDetailRoutes';
import ProductRoute from './product/productRoutes';
import SessionRoute from './session/sessionRoutes';
import UserRoute from './user/userRoutes';
import AdditionalHttpStatusCodes from './serverError/serverErrors';

function routes(app: Express) {
  app.use('/api-docs', SwaggerUI.instance.serveAndSetup());
  app.use('/auth', AuthRoute);
  app.use('/user', deserializeUser, UserRoute);
  app.use('/order', deserializeUser, OrderRoute);
  app.use('/session', deserializeUser, SessionRoute);
  app.use('/product', deserializeUser, ProductRoute);
  app.use('/order-detail', deserializeUser, OrderDetailRoute);
  app.use(AdditionalHttpStatusCodes);
}

export default routes;

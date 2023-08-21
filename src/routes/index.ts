import { Express } from 'express';
import AuthRoute from './auth/authRoutes';
import SessionRoute from './session/sessionRoutes';
import ProductRoute from './product/productRoutes';
import OrderRoute from './order/orderRoutes';
import UserRoute from './user/userRoutes';
import AdditionalHttpStatusCodes from './serverError/serverError';
import SwaggerUI from '@/services/api-doc';

function routes(app: Express) {
  app.use('/api-docs', SwaggerUI.instance.serveAndSetup());
  app.use('/auth', AuthRoute);
  app.use('/session', SessionRoute);
  app.use('/product', ProductRoute);
  // app.use('/order', OrderRoute);
  // app.use('/user', UserRoute);
  app.use(AdditionalHttpStatusCodes);
}

export default routes;

import { Express } from 'express';
import AuthRoute from './auth/authRoutes';
import SessionRoute from './session/sessionRoutes';
import ProductRoute from './product/productRoutes';
import OrderRoute from './order/orderRoutes';
import CustomerRoute from './customer/customerRoutes';

import { InternalServerError } from './serverError/serverError';
import { Request, Response, NextFunction } from 'express';

function routes(app: Express) {
  app.use('/auth', AuthRoute);
  app.use('/session', SessionRoute);
  app.use('/product', ProductRoute);
  app.use('/order', OrderRoute);
  app.use('/customer', CustomerRoute);
  app.use(InternalServerError);
}

export default routes;

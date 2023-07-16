import { Express } from 'express';
import AuthRoute from './auth.route';
import SessionRoute from './session.route';
import ProductRoute from './product.route';
import OrderRoute from './order.route';

function routes(app: Express) {
  app.use('/auth', AuthRoute);
  app.use('/session', SessionRoute);
  app.use('/product/', ProductRoute);
  app.use('/order/', OrderRoute);
}

export default routes;

import { Express } from 'express';
import AuthRoute from './auth.route';
import Auth from './auth/index';
import SessionRoute from './session.route';
import ProductRoute from './product.route';
import OrderRoute from './order.route';
import otherRoute from './other.route';

function routes(app: Express) {
  // app.use('/auth', AuthRoute);
  app.use('/auth2', Auth);
  app.use('/session', SessionRoute);
  app.use('/product', ProductRoute);
  app.use('/order', OrderRoute);
  app.use('/', otherRoute);
}

export default routes;

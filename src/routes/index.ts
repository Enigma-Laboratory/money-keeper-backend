import { Express } from 'express';
import AuthRoute from './auth.route';
import Auth from './auth/index';
import SessionRoute from './session.route';
import ProductRoute from './product.route';
import OrderRoute from './order.route';
import otherRoute from './other.route';

function routes(app: Express) {
  // app.use('/auth', AuthRoute);
  app.use('/auth2', jwtconfig.authenticate, Auth);
  app.use('/session', jwtconfig.authenticate, SessionRoute);
  app.use('/product', jwtconfig.authenticate, ProductRoute);
  app.use('/order', jwtconfig.authenticate, OrderRoute);
  app.use('/', jwtconfig.authenticate, otherRoute);
}

export default routes;

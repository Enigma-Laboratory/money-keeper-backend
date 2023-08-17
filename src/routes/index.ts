import { deserializeUser } from '@/middleware';
import SwaggerUI from '@/services/api-doc';
import { Express, Response, Request } from 'express';
import AuthRoute from './auth/authRoutes';
import OrderRoute from './order/orderRoutes';
import OrderDetailRoute from './orderDetail/orderDetailRoutes';
import ProductRoute from './product/productRoutes';
import AdditionalHttpStatusCodes from './serverError/serverError';
import SessionRoute from './session/sessionRoutes';
import UserRoute from './user/userRoutes';

const list = [
  { url: '/api-docs', token: false, route: SwaggerUI.instance.serveAndSetup() },
  { url: '/auth', token: false, route: AuthRoute },
  { url: '/user', token: true, route: UserRoute },
  { url: '/order', token: true, route: OrderRoute },
  { url: '/session', token: true, route: SessionRoute },
  { url: '/product', token: true, route: ProductRoute },
  { url: '/order-detail', token: true, route: OrderDetailRoute },
  { url: '/', token: false, route: AdditionalHttpStatusCodes },
];

function routes(app: Express) {
  list.forEach(_ => {
    if (_.token) app.use(_.url, deserializeUser, _.route);
    else app.use(_.url, _.route);
  });
  app.use((err: any, req: Request, res: Response, next: any) => {
    console.log('hello');
    res.status(500).send(err.message);
  });
}

export default routes;

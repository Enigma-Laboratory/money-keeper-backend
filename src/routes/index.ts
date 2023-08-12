import { Express } from 'express';
import AuthRoute from './auth/authRoutes';
import SessionRoute from './session/sessionRoutes';
import ProductRoute from './product/productRoutes';
import OrderRoute from './order/orderRoutes';
import CustomerRoute from './customer/customerRoutes';
<<<<<<< Updated upstream
=======
import { InternalServerError } from './serverError/serverError';
>>>>>>> Stashed changes

function routes(app: Express) {
  app.use('/auth', AuthRoute);
  app.use('/session', SessionRoute);
  app.use('/product', ProductRoute);
  app.use('/order', OrderRoute);
  app.use('/customer', CustomerRoute);
<<<<<<< Updated upstream
=======
  app.use(InternalServerError);
>>>>>>> Stashed changes
}

export default routes;

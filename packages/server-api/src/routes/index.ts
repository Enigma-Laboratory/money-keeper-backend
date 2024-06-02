import { accessToken } from '@/middleware/accessToken';
import SwaggerUI from '@/services/apiDocsServices/apiDocsServices';
import { Express } from 'express';
import AuthRoute from './auth/authRoutes';
import operationalSettingRoutes from './operationalSetting/operationalSettingRoutes';
import OrderRoute from './order/orderRoutes';
import ProductRoute from './product/productRoutes';
import AdditionalHttpStatusCodes from './serverError/serverError';
import UserRoute from './user/userRoutes';
// import RemoveRoute from '@/utils/remove_data';

function routes(app: Express) {
  app.use('/api-docs', SwaggerUI.instance.serveAndSetup());
  app.use('/auth', accessToken, AuthRoute);
  app.use('/products', accessToken, ProductRoute);
  app.use('/orders', accessToken, OrderRoute);
  app.use('/users', accessToken, UserRoute);
  app.use('/operational-settings', accessToken, operationalSettingRoutes);

  // app.use('/remove', accessToken, RemoveRoute); // remove all datas for each table.

  app.use(AdditionalHttpStatusCodes);
}

export default routes;

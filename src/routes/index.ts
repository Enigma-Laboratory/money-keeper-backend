import { Express } from 'express';
import AuthRoute from './auth/authRoutes';
import HavingTokenRoute from './token/index';
import AdditionalHttpStatusCodes from './serverError/serverError';

function routes(app: Express) {
  app.use('/auth', AuthRoute);
  app.use('/', HavingTokenRoute);
  app.use(AdditionalHttpStatusCodes);
}

export default routes;

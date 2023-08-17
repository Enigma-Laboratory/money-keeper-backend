import { Express } from 'express';
import AuthRoute from './auth/authRoutes';
import HavingTokenRoute from './token/index';
import AdditionalHttpStatusCodes from './serverError/serverError';
import SwaggerUI from '@/utils/api-doc';

function routes(app: Express) {
  app.use('/api-docs', SwaggerUI.instance.serveAndSetup());
  app.use('/auth', AuthRoute);
  app.use('/', HavingTokenRoute);
  app.use(AdditionalHttpStatusCodes);
}

export default routes;

import SwaggerUI from '@/services/api-doc';
import { Express } from 'express';
import AuthRoute from './auth/authRoutes';
import AdditionalHttpStatusCodes from './serverError/serverError';
import HavingTokenRoute from './token/index';

function routes(app: Express) {
  app.use('/api-docs', SwaggerUI.instance.serveAndSetup());
  app.use('/auth', AuthRoute);
  app.use('/', HavingTokenRoute);
  app.use(AdditionalHttpStatusCodes);
}

export default routes;

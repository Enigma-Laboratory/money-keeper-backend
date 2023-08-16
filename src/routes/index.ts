import { Express } from 'express';
import AuthRoute from './auth/authRoutes';
import HavingTokenRoute from './token/index';
import AdditionalHttpStatusCodes from './serverError/serverError';
import * as swaggerUi from '../utils/api-doc';
import swaggerSpec from '../utils/api-doc';

function routes(app: Express) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use('/auth', AuthRoute);
  app.use('/', HavingTokenRoute);
  app.use(AdditionalHttpStatusCodes);
}

export default routes;

import moduleAlias from './utils/moduleAlias';

moduleAlias();

import routes from '@/routes/index';
import Config from '@/services/configServices';
import connect from '@/utils/connect';
import { corsOptions } from '@/utils/cors';
import logger from '@/utils/logger';
import cors from 'cors';
import express from 'express';

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

routes(app);

app.listen(Config.instance.port, async () => {
  logger.info(`App is running port :${Config.instance.port}`);
  await connect();
});

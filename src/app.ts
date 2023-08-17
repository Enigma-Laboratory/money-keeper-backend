import './utils/absolute_path';
import cors from 'cors';
import express from 'express';
import routes from '@/routes/index';
import connect from '@/utils/connect';
import { corsOptions } from '@/utils/cors';
import logger from '@/utils/logger';

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(deserializeUser);
app.use(cors(corsOptions));

routes(app);
app.listen(process.env.PORT, async () => {
  logger.info(`App is running port :${process.env.PORT}`);
  await connect();
});

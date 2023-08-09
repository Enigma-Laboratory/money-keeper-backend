import config from 'config';
import cors from 'cors';
import express from 'express';
import deserializeUser from './middleware/deserializeUser';
import routes from './routes/index';
import connect from './utils/connect';
import { corsOptions } from './utils/cors';
import logger from './utils/logger';

const port = config.get<number>('port');

const app = express();

app.use(express.json());
app.use(deserializeUser);
app.use(cors(corsOptions));

app.listen(port, async () => {
  logger.info(`App is running port http:\\localhost:${port}`);
  await connect();
  routes(app);
});

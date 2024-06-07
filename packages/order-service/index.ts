import 'dotenv/config';
import moduleAlias from './src/utils/moduleAlias';

moduleAlias();

import { CreateApplication } from './src/app';

CreateApplication.instance;

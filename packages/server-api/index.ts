import moduleAlias from './src/utils/moduleAlias';

moduleAlias();

require('dotenv').config();

import { CreateApplication } from './src/app';

CreateApplication.instance;

require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { createDocument } from './app/docs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api/v1';
  app.setGlobalPrefix(globalPrefix);
  app.use(cookieParser());

  createDocument(app);

  await app.listen(process.env.PORT || 3001);
}
bootstrap();

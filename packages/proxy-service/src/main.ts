require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DEFAULT_CONFIG } from './config/config.default';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(DEFAULT_CONFIG.port);
}
bootstrap();

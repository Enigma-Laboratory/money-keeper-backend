import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ReverseProxyAuthMiddleware } from './proxy.auth.middleware';
import { ReverseProxyOrderMiddleware } from './proxy.order.middleware';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ReverseProxyAuthMiddleware).forRoutes({
      path: '/api/v1/auth-service/*',
      method: RequestMethod.ALL,
    });

    consumer.apply(ReverseProxyOrderMiddleware).forRoutes({
      path: '/api/v1/order-service/*',
      method: RequestMethod.ALL,
    });
  }
}

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { DEFAULT_CONFIG } from './config/config.default';

@Injectable()
export class ReverseProxyOrderMiddleware implements NestMiddleware {
  private proxy = createProxyMiddleware({
    target: DEFAULT_CONFIG.order_service_url,
    changeOrigin: true,
    pathRewrite: {
      'api/v1/order-service': '',
    },
  });

  use(req: Request, res: Response, next: () => void) {
    this.proxy(req, res, next);
  }
}

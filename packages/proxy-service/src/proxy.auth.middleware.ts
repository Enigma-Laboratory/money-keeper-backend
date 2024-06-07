import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { DEFAULT_CONFIG } from './config/config.default';

@Injectable()
export class ReverseProxyAuthMiddleware implements NestMiddleware {
  private proxy = createProxyMiddleware({
    target: DEFAULT_CONFIG.auth_service_url,
    changeOrigin: true,
    pathRewrite: {
      'api/v1/auth-service': '/api/v1/',
    },
  });

  use(req: Request, res: Response, next: () => void) {
    console.log(DEFAULT_CONFIG);
    this.proxy(req, res, next);
  }
}

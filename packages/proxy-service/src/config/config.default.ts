export const DEFAULT_CONFIG = {
  port: Number(process.env.PORT || 3300),
  env: process.env.APP_ENV || 'development',
  auth_service_url: process.env.AUTH_SERVICE_URL || 'http://localhost:3301',
  order_service_url: process.env.ORDER_SERVICE_URL || 'http://localhost:3302',
};

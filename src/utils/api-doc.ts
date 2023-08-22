import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'NodeJS API Project for mongodb',
      version: '1.0.0',
    },
    servers: [{ url: 'http://localhost:1338', description: 'Development server' }],
    tags: [
      { name: 'user', description: '' },
      { name: 'auth', description: '' },
      { name: 'order', description: '' },
      { name: 'order detail', description: '' },
      { name: 'product', description: '' },
      { name: 'session', description: '' },
    ],
  },
  apis: ['./src/routes/**/*.ts'],
};
const swaggerSpec = swaggerJsdoc(options);
const serve = swaggerUi.serve;
const setup = swaggerUi.setup;
export { serve, setup };
export default swaggerSpec;
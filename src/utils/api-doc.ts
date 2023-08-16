import swaggerJsdoc, { Options } from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options: Options = {
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
export { swaggerSpec };
export default swaggerUi;

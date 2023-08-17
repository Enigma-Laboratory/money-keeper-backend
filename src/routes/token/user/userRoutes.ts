import * as UserComponent from '@/components/user';
import express from 'express';

const route = express.Router();

/**
 * @openapi
 * /user/{id}:
 *   get:
 *     tags:
 *       - user
 *     description: description
 *     summary: Get One User
 *     operationId: GetOneUser
 *     requestBody:
 *       description: requestBody description
 *     responses:
 *       200:
 *         description: responses description
 */
route.get('/:id', UserComponent.getOneUserHandler);

/**
 * @openapi
 * /user/{id}:
 *   get:
 *     tags:
 *       - user
 *     description: description
 *     summary: Get All User
 *     operationId: GetAllUser
 *     requestBody:
 *       description: requestBody description
 *     responses:
 *       200:
 *         description: responses description
 */
route.get('/users', UserComponent.getAllUsesHandler);

export default route;

import express from 'express';
import * as CustomerComponent from '../../../components/customer';

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
route.get('/:id', CustomerComponent.getOneUserHandler);

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
route.get('/users', CustomerComponent.getAllUsesHandler);

export default route;

import express from 'express';

import * as SessionComponent from '@/components/session';

const route = express.Router();

/**
 * @openapi
 * /session/create-session:
 *   post:
 *     tags:
 *       - session
 *     description: description
 *     summary: Create Session
 *     operationId: CreateSession
 *     requestBody:
 *       description: requestBody description
 *     responses:
 *       200:
 *         description: responses description
 */
route.post('/create-session', SessionComponent.createUserSessionHandler);
/**
 * @openapi
 * /session/sessions:
 *   get:
 *     tags:
 *       - session
 *     description: description
 *     summary: Create Session
 *     operationId: CreateSession
 *     requestBody:
 *       description: requestBody description
 *     responses:
 *       200:
 *         description: responses description
 */
route.get('/sessions', SessionComponent.getUserSessionsHandler);

export default route;

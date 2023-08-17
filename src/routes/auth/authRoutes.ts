import * as AuthComponent from '@/components/auth';
import express from 'express';

const route = express.Router();

/**
 * @openapi
 * /auth/sign-in:
 *   post:
 *     tags:
 *       - auth
 *     description: description
 *     summary: Login
 *     operationId: SignInUser
 *     requestBody:
 *       description: requestBody description
 *     responses:
 *       200:
 *         description: responses description
 */
route.post('/sign-in', AuthComponent.postSignInHandler);

/**
 * @openapi
 * /auth/sign-up:
 *   post:
 *     tags:
 *       - auth
 *     description: description
 *     summary: Log out
 *     operationId: SignUpUser
 *     requestBody:
 *       description: requestBody description
 *     responses:
 *       200:
 *         description: responses description
 */
route.post('/sign-up', AuthComponent.postSignUpUserHandler);

export default route;

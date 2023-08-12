import express from 'express';
import * as AuthComponent from '../../components/auth';

const route = express.Router();

/**
 * post /sign in
 * @summary post create token when user
 *
 * @tags user
 *
 * @security BearerAuth
 *
 * @param {User} optional userModel and unique email
 **
 * @return {Token} 200 - Return token - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.post('/sign-in', AuthComponent.postSignInHandler);

/**
 * post /sign up
 * @summary post sign up
 *
 * @tags user
 *
 * @security BearerAuth
 *
 * @param {User} optional userModel and unique email
 **
 * @return {User} 200 - Return user by id - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.post('/sign-up', AuthComponent.postSignUpUserHandler);

export default route;

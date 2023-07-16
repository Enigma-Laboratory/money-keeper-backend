import express from 'express';
import * as AuthComponent from '../components/auth/index';

const route = express.Router();

/**
 * post /user
 * @summary post create one user
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
route.post('/create-user', AuthComponent.createUserHandler);

/**
 * get /user
 * @summary get one user
 *
 * @tags User
 *
 * @security BearerAuth
 *
 * @param {string} email - The unique email of user
 **
 * @return {User} 200 - Return user by id - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.get('/user/:email', AuthComponent.getOneUserHandler);

/**
 * get /users
 * @summary get all user
 *
 * @tags user
 *
 * @security BearerAuth
 *
 **
 * @return {User} 200 - Return array user  - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.get('/users', AuthComponent.getAllUsesHandler);

export default route;

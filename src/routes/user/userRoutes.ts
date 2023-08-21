import express from 'express';
import * as UserComponent from '@/components/user';

const route = express.Router();

/**
 * get /user
 * @summary get one user
 *
 * @tags User
 *
 * @security BearerAuth
 *
 * @param {string} id - The unique id of user
 **
 * @return {User} 200 - Return user by id - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.get('/:id', UserComponent.getOneUserHandler);

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
route.get('/users', UserComponent.getAllUsesHandler);

export default route;

import express from 'express';
import * as CustomerComponent from '../../components/customer';

const route = express.Router();

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
route.get('/user/:email', CustomerComponent.getOneUserHandler);

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
route.get('/users', CustomerComponent.getAllUsesHandler);

export default route;
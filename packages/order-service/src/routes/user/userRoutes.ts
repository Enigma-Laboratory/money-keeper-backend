import * as UserComponent from '@/components/user';
import express from 'express';

const route = express.Router();

/**
 * get /user
 * @summary Get daily user
 *
 * @tags User
 *
 * @security BearerAuth
 *
 * @param {string} [start] - Start date for the query in ISO 8601 format (YYYY-MM-DD)
 * @param {string} [end] - End date for the query in ISO 8601 format (YYYY-MM-DD)
 * @param {number} [total] - Total sum of daily user
 * @param {number} [trend] - Percentage change in total  between consecutive days
 *
 * @return {FindAllDailyOrderResponse} 200 - Returns daily user  - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.get('/daily-user', UserComponent.getDailyUserHandler);

/**
 * get /users/:id
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
 * put /users
 * @summary update one user
 *
 * @tags User
 *
 * @security BearerAuth
 *
 * @param {} id - The unique id of user
 **
 * @return {User} 200 - Return user by id - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.put('/', UserComponent.updateOneUserHandler);

/**
 * get /users
 * @summary get all user
 *
 * @tags user
 *
 * @security BearerAuth
 **
 * @return {User} 200 - Return array user  - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.get('/', UserComponent.getAllUserHandler);

export default route;

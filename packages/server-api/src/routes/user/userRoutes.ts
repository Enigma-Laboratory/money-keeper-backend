import * as UserComponent from "@/components/user";
import express from "express";

const route = express.Router();

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
route.get("/:id", UserComponent.getOneUserHandler);

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
route.put("/", UserComponent.updateOneUserHandler);

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
route.get("/", UserComponent.getAllUserHandler);

export default route;

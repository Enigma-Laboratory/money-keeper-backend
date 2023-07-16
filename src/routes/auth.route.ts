import express from "express";
import * as AuthComponent from "../components/auth/index";

const route = express.Router();

/**
 * get /Product
 * @summary get one product
 *
 * @tags Product
 *
 * @security BearerAuth
 *
 * @param {string} id - The unique id of product
 **
 * @return {Product} 200 - Return product by id - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.post("/create-user", AuthComponent.createUserHandler);

/**
 * get /Product
 * @summary get one product
 *
 * @tags Product
 *
 * @security BearerAuth
 *
 * @param {string} id - The unique id of product
 **
 * @return {Product} 200 - Return product by id - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.get("/user/:email", AuthComponent.getOneUserHandler);

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
route.get("/users", AuthComponent.getAllUsesHandler);

export default route;

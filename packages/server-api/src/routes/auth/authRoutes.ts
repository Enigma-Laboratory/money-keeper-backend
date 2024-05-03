import * as AuthComponent from "@/components/auth";
import express from "express";

const route = express.Router();

/**
 * post /sign in
 * @summary create token for the user
 *
 * @tags user
 *
 * @security BearerAuth
 *
 * @param {User} userModel and unique email
 **
 * @return {Token} 200 - Return token - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.post("/sign-in", AuthComponent.signInHandler);

/**
 * post /sign up
 * @summary sign up
 *
 * @tags user
 *
 * @security BearerAuth
 *
 * @param {CreateUserParams}  unique email
 **
 * @return {User} 200 - Return the registered user - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.post("/sign-up", AuthComponent.signUpHandler);

export default route;

import * as AuthComponent from '@/components/auth';
import express from 'express';

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
route.post('/sign-in', AuthComponent.signInHandler);

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
route.post('/sign-up', AuthComponent.signUpHandler);

/**
 * post /forget-password
 * @summary Forget password
 *
 * @tags user
 *
 * @param {ForgetPasswordParams} email.body.required - The email address of the user
 *
 * @return {string} 200 - A message indicating that the password reset instructions have been sent
 * @return {Error} 400 - Bad request, invalid email format
 * @return {Error} 404 - User not found with the provided email address
 * @return {Error} default - Unexpected error
 */
route.post('/forget-password', AuthComponent.resetPasswordHandler);

export default route;

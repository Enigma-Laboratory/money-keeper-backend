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

/**
 * post /refresh-token
 * @summary create a new access token using the refresh token
 *
 * @tags user
 *
 * @security BearerAuth
 *
 * @param {string} refreshToken - The refresh token to generate a new access token
 *
 * @return {Token} 200 - Return new access token - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.post('/refresh-token', AuthComponent.refreshTokenHandler);

/**
 * post /sign-out
 * @summary sign out the user by invalidating the refresh token
 *
 * @tags user
 *
 * @security BearerAuth
 *
 * @param {string} refreshToken - The refresh token to invalidate
 *
 * @return {string} 200 - Sign out successful - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.post('/sign-out', AuthComponent.signOutHandler);

export default route;

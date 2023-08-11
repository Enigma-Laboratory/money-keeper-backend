import express from 'express';
import * as OtherComponent from '../components/other';

const route = express.Router();

route.get('/login', OtherComponent.loginHandler);

route.put('/logout', OtherComponent.logoutHandler);

route.get('/register', OtherComponent.registerUserHandler);

export default route;

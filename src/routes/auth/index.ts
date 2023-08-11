import express from 'express';
import UserRoute from './user.route';

const route = express.Router();

route.use('/users', UserRoute);

export default route;

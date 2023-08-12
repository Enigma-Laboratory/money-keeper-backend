import express from 'express';

import * as SessionComponent from '../../components/session';

const route = express.Router();

route.post('/create-session', SessionComponent.createUserSessionHandler);
route.get('/sessions', SessionComponent.getUserSessionsHandler);

export default route;

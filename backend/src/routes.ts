import UserController from './controllers/UserController';
import { Router } from 'express';

const routes = Router();

routes.get('/users', UserController.index);

export default routes;

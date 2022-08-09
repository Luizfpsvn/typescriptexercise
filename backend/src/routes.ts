import UserController from './controllers/UserController';
import { Router } from 'express';

const routes = Router();

routes.get('/users', UserController.index);
routes.get('/users/create', UserController.create);

export default routes;

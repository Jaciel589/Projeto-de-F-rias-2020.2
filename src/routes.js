import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionControler from './app/controllers/SessionController';
import ReceitaController from './app/controllers/ReceitaController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/users', SessionControler.store);
routes.post('/receita', ReceitaController.store)
export default routes;

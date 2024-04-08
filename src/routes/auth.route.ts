import { Router } from 'express';
import { makeBioimpedanceController } from '../factories/controllers/bioimpedance_controller.factory'; 
import { makeAuthtroller } from '../factories/controllers/auth_controller.factory';

const cuthController = makeAuthtroller();

export default (router: Router) => {
  router.post('/auth/signup', (req, res) => cuthController.signin(req, res));
  router.post('/auth/signin', (req, res) => cuthController.signup(req, res));
  router.post('/auth/refresh', (req, res) => cuthController.refresh(req, res));
};

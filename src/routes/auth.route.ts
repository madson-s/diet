import { Router } from 'express';
import { makeAuthtroller } from '../factories/controllers/auth_controller.factory';

const authController = makeAuthtroller();

export default (router: Router) => {
  router.post('/auth/signup', (req, res) => authController.signup(req, res));
  router.post('/auth/signin', (req, res) => authController.signin(req, res));
  router.post('/auth/refresh', (req, res) => authController.refresh(req, res));
};

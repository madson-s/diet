import { Router } from 'express';
import { makeAnthropometricController } from '../factories/controllers/anthropometric_controller.factory'; 

const anthropometricController = makeAnthropometricController();

export default (router: Router) => {
  router.get('/anthropometrics', (req, res) => anthropometricController.getAllAnthropometrics(req, res));
  router.get('/anthropometrics/:id', (req, res) => anthropometricController.getAnthropometricById(req, res));
  router.post('/anthropometrics', (req, res) => anthropometricController.createAnthropometric(req, res));
  router.put('/anthropometrics/:id', (req, res) => anthropometricController.updateAnthropometric(req, res));
  router.delete('/anthropometrics/:id', (req, res) => anthropometricController.deleteAnthropometric(req, res));
};

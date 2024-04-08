import { Router } from 'express';
import { makeValidationController } from '../factories/controllers/validation_controller.factory'; 
const validationController = makeValidationController();

export default (router: Router) => {
  router.get('/validations', (req, res) => validationController.getAllValidations(req, res));
  router.get('/validations/:id', (req, res) => validationController.getValidationById(req, res));
  router.post('/validations', (req, res) => validationController.createValidation(req, res));
  router.put('/validations/:id', (req, res) => validationController.updateValidation(req, res));
  router.delete('/validations/:id', (req, res) => validationController.deleteValidation(req, res));
};

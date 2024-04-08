import { Router } from 'express';
import { makePortionController } from '../factories/controllers/portion_controller.factory';

const portionController = makePortionController();

export default (router: Router) => {
  router.get('/portions', (req, res) => portionController.getAllPortions(req, res));
  router.get('/portions/:id', (req, res) => portionController.getPortionById(req, res));
  router.post('/portions', (req, res) => portionController.createPortion(req, res));
  router.put('/portions/:id', (req, res) => portionController.updatePortion(req, res));
  router.delete('/portions/:id', (req, res) => portionController.deletePortion(req, res));
};

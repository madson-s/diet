import { Router } from 'express';
import { makeSkinFoldController } from '../factories/controllers/skinfold_controller.factory'; 

const skinFoldController = makeSkinFoldController();

export default (router: Router) => {
  router.get('/skinFolds', (req, res) => skinFoldController.getAllSkinFolds(req, res));
  router.get('/skinFolds/:id', (req, res) => skinFoldController.getSkinFoldById(req, res));
  router.post('/skinFolds', (req, res) => skinFoldController.createSkinFold(req, res));
  router.put('/skinFolds/:id', (req, res) => skinFoldController.updateSkinFold(req, res));
  router.delete('/skinFolds/:id', (req, res) => skinFoldController.deleteSkinFold(req, res));
};

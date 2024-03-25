import { Router } from 'express';
import { makeBioimpedanceController } from '../factories/controllers/bioimpedance_controller.factory'; 

const bioimpedanceController = makeBioimpedanceController();

export default (router: Router) => {
  router.get('/bioimpedances', (req, res) => bioimpedanceController.getAllBioimpedances(req, res));
  router.get('/bioimpedances/:id', (req, res) => bioimpedanceController.getBioimpedanceById(req, res));
  router.post('/bioimpedances', (req, res) => bioimpedanceController.createBioimpedance(req, res));
  router.put('/bioimpedances/:id', (req, res) => bioimpedanceController.updateBioimpedance(req, res));
  router.delete('/bioimpedances/:id', (req, res) => bioimpedanceController.deleteBioimpedance(req, res));
};

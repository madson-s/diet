import { Router } from 'express';
import { makeMeasureController } from '../factories/controllers/measure_controller.factory'; 

const measureController = makeMeasureController();

export default (router: Router) => {
  router.get('/measures', (req, res) => measureController.getAllMeasures(req, res));
  router.get('/measures/:id', (req, res) => measureController.getMeasureById(req, res));
  router.post('/measures', (req, res) => measureController.createMeasure(req, res));
  router.put('/measures/:id', (req, res) => measureController.updateMeasure(req, res));
  router.delete('/measures/:id', (req, res) => measureController.deleteMeasure(req, res));
};

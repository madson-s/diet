import { Router } from 'express';
import { makeLateralCircumferenceController } from '../factories/controllers/lateralcircumference_controller.factory'; 

const lateralCircumferenceController = makeLateralCircumferenceController();

export default (router: Router) => {
  router.get('/lateralCircumferences', (req, res) => lateralCircumferenceController.getAllLateralCircumferences(req, res));
  router.get('/lateralCircumferences/:id', (req, res) => lateralCircumferenceController.getLateralCircumferenceById(req, res));
  router.post('/lateralCircumferences', (req, res) => lateralCircumferenceController.createLateralCircumference(req, res));
  router.put('/lateralCircumferences/:id', (req, res) => lateralCircumferenceController.updateLateralCircumference(req, res));
  router.delete('/lateralCircumferences/:id', (req, res) => lateralCircumferenceController.deleteLateralCircumference(req, res));
};

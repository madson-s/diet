import { Router } from 'express';
import { makeCircumferenceController } from '../factories/controllers/circumference_controller.factory'; 

const circumferenceController = makeCircumferenceController();

export default (router: Router) => {
  router.get('/circumferences', (req, res) => circumferenceController.getAllCircumferences(req, res));
  router.get('/circumferences/:id', (req, res) => circumferenceController.getCircumferenceById(req, res));
  router.post('/circumferences', (req, res) => circumferenceController.createCircumference(req, res));
  router.put('/circumferences/:id', (req, res) => circumferenceController.updateCircumference(req, res));
  router.delete('/circumferences/:id', (req, res) => circumferenceController.deleteCircumference(req, res));
};

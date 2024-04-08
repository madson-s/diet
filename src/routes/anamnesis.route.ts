import { Router } from 'express';
import { makeAnamnesisController } from '../factories/controllers/anamnesis_controller.factory'; 

const anamnesisController = makeAnamnesisController();

export default (router: Router) => {
  router.get('/anamnesis', (req, res) => anamnesisController.getAllAnamnesis(req, res));
  router.get('/anamnesis/:id', (req, res) => anamnesisController.getAnamnesisById(req, res));
  router.post('/anamnesis', (req, res) => anamnesisController.createAnamnesis(req, res));
  router.put('/anamnesis/:id', (req, res) => anamnesisController.updateAnamnesis(req, res));
  router.delete('/anamnesis/:id', (req, res) => anamnesisController.deleteAnamnesis(req, res));
};

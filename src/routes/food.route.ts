import { Router } from 'express';
import { makeFoodController } from '../factories/controllers/food_controller.factory'; 

const foodController = makeFoodController();

export default (router: Router) => {
  router.get('/foods', (req, res) => foodController.getAllFoods(req, res));
  router.get('/foods/:id', (req, res) => foodController.getFoodById(req, res));
  router.post('/foods', (req, res) => foodController.createFood(req, res));
  router.put('/foods/:id', (req, res) => foodController.updateFood(req, res));
  router.delete('/foods/:id', (req, res) => foodController.deleteFood(req, res));
};

import { Router } from 'express';
import { makeMealController } from '../factories/controllers/meal_controller.factory'; 

const mealController = makeMealController();

export default (router: Router) => {
  router.get('/meals', (req, res) => mealController.getAllMeals(req, res));
  router.get('/meals/:id', (req, res) => mealController.getMealById(req, res));
  router.post('/meals', (req, res) => mealController.createMeal(req, res));
  router.put('/meals/:id', (req, res) => mealController.updateMeal(req, res));
  router.delete('/meals/:id', (req, res) => mealController.deleteMeal(req, res));
};
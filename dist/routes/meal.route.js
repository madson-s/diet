"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const meal_controller_factory_1 = require("../factories/controllers/meal_controller.factory");
const mealController = (0, meal_controller_factory_1.makeMealController)();
exports.default = (router) => {
    router.get('/meals', (req, res) => mealController.getAllMeals(req, res));
    router.get('/meals/:id', (req, res) => mealController.getMealById(req, res));
    router.post('/meals', (req, res) => mealController.createMeal(req, res));
    router.put('/meals/:id', (req, res) => mealController.updateMeal(req, res));
    router.delete('/meals/:id', (req, res) => mealController.deleteMeal(req, res));
};

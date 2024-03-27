"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const food_controller_factory_1 = require("../factories/controllers/food_controller.factory");
const foodController = (0, food_controller_factory_1.makeFoodController)();
exports.default = (router) => {
    router.get('/foods', (req, res) => foodController.getAllFoods(req, res));
    router.get('/foods/:id', (req, res) => foodController.getFoodById(req, res));
    router.post('/foods', (req, res) => foodController.createFood(req, res));
    router.put('/foods/:id', (req, res) => foodController.updateFood(req, res));
    router.delete('/foods/:id', (req, res) => foodController.deleteFood(req, res));
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFoodController = void 0;
const food_controller_1 = require("../../controllers/food.controller");
const food_repository_1 = require("../../repositories/food.repository");
function makeFoodController() {
    const repository = new food_repository_1.FoodRepository();
    return new food_controller_1.FoodController(repository);
}
exports.makeFoodController = makeFoodController;

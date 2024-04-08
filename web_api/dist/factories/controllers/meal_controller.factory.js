"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeMealController = void 0;
const meal_controller_1 = require("../../controllers/meal.controller");
const meal_repository_1 = require("../../repositories/meal.repository");
function makeMealController() {
    const repository = new meal_repository_1.MealRepository();
    return new meal_controller_1.MealController(repository);
}
exports.makeMealController = makeMealController;

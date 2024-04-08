"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealController = void 0;
class MealController {
    constructor(mealRepository) {
        this.mealRepository = mealRepository;
    }
    getAllMeals(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const meals = yield this.mealRepository.getAll();
                res.json(meals);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching meals');
            }
        });
    }
    getMealById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const meal = yield this.mealRepository.getById(+req.params.id);
                if (!meal) {
                    return res.status(404).send('Meal not found');
                }
                res.json(meal);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching meal');
            }
        });
    }
    createMeal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newMeal = yield this.mealRepository.create(req.body);
                res.status(201).json(newMeal);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error creating meal');
            }
        });
    }
    updateMeal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedMeal = yield this.mealRepository.update(+req.params.id, req.body);
                res.json(updatedMeal);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error updating meal');
            }
        });
    }
    deleteMeal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.mealRepository.delete(+req.params.id);
                res.status(204).send();
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error deleting meal');
            }
        });
    }
}
exports.MealController = MealController;

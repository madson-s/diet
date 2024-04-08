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
exports.FoodController = void 0;
class FoodController {
    constructor(foodRepository) {
        this.foodRepository = foodRepository;
    }
    getAllFoods(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { lastSync } = req.query;
                if (lastSync) {
                    const lastSyncDate = new Date(+lastSync);
                    const foods = yield this.foodRepository.getAllSync(lastSyncDate);
                    return res.json(foods);
                }
                const foods = yield this.foodRepository.getAll();
                res.json(foods);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching foods');
            }
        });
    }
    getFoodById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const food = yield this.foodRepository.getById(+req.params.id);
                if (!food) {
                    return res.status(404).send('Food not found');
                }
                res.json(food);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching food');
            }
        });
    }
    createFood(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newFood = yield this.foodRepository.create(req.body);
                res.status(201).json(newFood);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error creating food');
            }
        });
    }
    updateFood(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedFood = yield this.foodRepository.update(+req.params.id, req.body);
                res.json(updatedFood);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error updating food');
            }
        });
    }
    deleteFood(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.foodRepository.delete(+req.params.id);
                res.status(204).send();
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error deleting food');
            }
        });
    }
}
exports.FoodController = FoodController;

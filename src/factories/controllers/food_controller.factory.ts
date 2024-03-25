import { FoodController } from "../../controllers/food.controller";
import { FoodRepository } from "../../repositories/food.repository";

export function makeFoodController(): FoodController {
  const repository = new FoodRepository();
  return new FoodController(repository);
}
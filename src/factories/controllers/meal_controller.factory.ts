import { MealController } from "../../controllers/meal.controller";
import { MealRepository } from "../../repositories/meal.repository";

export function makeMealController(): MealController {
  const repository = new MealRepository();
  return new MealController(repository);
}
import { Request, Response } from 'express';
import { MealRepository } from '../repositories/meal.repository'; 

export class MealController {
  private readonly mealRepository: MealRepository;

  constructor(mealRepository: MealRepository) {
    this.mealRepository = mealRepository;
  }

  async getAllMeals(req: Request, res: Response) {
    try {
      const meals = await this.mealRepository.getAll();
      res.json(meals);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching meals');
    }
  }

  async getMealById(req: Request, res: Response) {
    try {
      const meal = await this.mealRepository.getById(+req.params.id);
      if (!meal) {
        return res.status(404).send('Meal not found');
      }
      res.json(meal);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching meal');
    }
  }

  async createMeal(req: Request, res: Response) {
    try {
      const newMeal = await this.mealRepository.create(req.body);
      res.status(201).json(newMeal);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error creating meal');
    }
  }

  async updateMeal(req: Request, res: Response) {
    try {
      const updatedMeal = await this.mealRepository.update(+req.params.id, req.body);
      res.json(updatedMeal);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error updating meal');
    }
  }

  async deleteMeal(req: Request, res: Response) {
    try {
      await this.mealRepository.delete(+req.params.id);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting meal');
    }
  }
}

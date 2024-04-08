import { Request, Response } from 'express';
import { FoodRepository } from '../repositories/food.repository'; 

export class FoodController {
  private readonly foodRepository: FoodRepository;

  constructor(foodRepository: FoodRepository) {
    this.foodRepository = foodRepository;
  }

  async getAllFoods(req: Request, res: Response) {
    try {
      const { lastSync } = req.query
      if(lastSync) {
        const lastSyncDate = new Date(+lastSync);
        const foods = await this.foodRepository.getAllSync(lastSyncDate);
        return res.json(foods);
      }
      const foods = await this.foodRepository.getAll();
      res.json(foods);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching foods');
    }
  }

  async getFoodById(req: Request, res: Response) {
    try {
      const food = await this.foodRepository.getById(+req.params.id);
      if (!food) {
        return res.status(404).send('Food not found');
      }
      res.json(food);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching food');
    }
  }

  async createFood(req: Request, res: Response) {
    try {
      const newFood = await this.foodRepository.create(req.body);
      res.status(201).json(newFood);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error creating food');
    }
  }

  async updateFood(req: Request, res: Response) {
    try {
      const updatedFood = await this.foodRepository.update(+req.params.id, req.body);
      res.json(updatedFood);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error updating food');
    }
  }

  async deleteFood(req: Request, res: Response) {
    try {
      await this.foodRepository.delete(+req.params.id);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting food');
    }
  }
}

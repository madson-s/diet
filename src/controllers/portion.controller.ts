import { Request, Response } from 'express';
import { PortionRepository } from '../repositories/portion.repository'; 

export class PortionController {
  private readonly portionRepository: PortionRepository;

  constructor(portionRepository: PortionRepository) {
    this.portionRepository = portionRepository;
  }

  async getAllPortions(req: Request, res: Response) {
    try {
      const portions = await this.portionRepository.getAll();
      res.json(portions);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching portions');
    }
  }

  async getPortionById(req: Request, res: Response) {
    try {
      const portion = await this.portionRepository.getById(+req.params.id);
      if (!portion) {
        return res.status(404).send('Portion not found');
      }
      res.json(portion);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching portion');
    }
  }

  async createPortion(req: Request, res: Response) {
    try {
      const newPortion = await this.portionRepository.create(req.body);
      res.status(201).json(newPortion);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error creating portion');
    }
  }

  async updatePortion(req: Request, res: Response) {
    try {
      const updatedPortion = await this.portionRepository.update(+req.params.id, req.body);
      res.json(updatedPortion);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error updating portion');
    }
  }

  async deletePortion(req: Request, res: Response) {
    try {
      await this.portionRepository.delete(+req.params.id);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting portion');
    }
  }
}

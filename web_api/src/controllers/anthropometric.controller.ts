import { Request, Response } from 'express';
import { AnthropometricRepository } from '../repositories/anthropometric.repository'; 

export class AnthropometricController {
  private readonly anthropometricRepository: AnthropometricRepository;

  constructor(anthropometricRepository: AnthropometricRepository) {
    this.anthropometricRepository = anthropometricRepository;
  }

  async getAllAnthropometrics(req: Request, res: Response) {
    try {
      const anthropometrics = await this.anthropometricRepository.getAll();
      res.json(anthropometrics);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching anthropometrics');
    }
  }

  async getAnthropometricById(req: Request, res: Response) {
    try {
      const anthropometric = await this.anthropometricRepository.getById(+req.params.id);
      if (!anthropometric) {
        return res.status(404).send('Anthropometric not found');
      }
      res.json(anthropometric);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching anthropometric');
    }
  }

  async createAnthropometric(req: Request, res: Response) {
    try {
      const newAnthropometric = await this.anthropometricRepository.create(req.body);
      res.status(201).json(newAnthropometric);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error creating anthropometric');
    }
  }

  async updateAnthropometric(req: Request, res: Response) {
    try {
      const updatedAnthropometric = await this.anthropometricRepository.update(+req.params.id, req.body);
      res.json(updatedAnthropometric);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error updating anthropometric');
    }
  }

  async deleteAnthropometric(req: Request, res: Response) {
    try {
      await this.anthropometricRepository.delete(+req.params.id);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting anthropometric');
    }
  }
}

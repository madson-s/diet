import { Request, Response } from 'express';
import { AnamnesisRepository } from '../repositories/anamnesis.repository'; 

export class AnamnesisController {
  private readonly anamnesisRepository: AnamnesisRepository;

  constructor(anamnesisRepository: AnamnesisRepository) {
    this.anamnesisRepository = anamnesisRepository;
  }

  async getAllAnamnesis(req: Request, res: Response) {
    try {
      const anamnesis = await this.anamnesisRepository.getAll();
      res.json(anamnesis);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching anamnesis');
    }
  }

  async getAnamnesisById(req: Request, res: Response) {
    try {
      const anamnesis = await this.anamnesisRepository.getById(+req.params.id);
      if (!anamnesis) {
        return res.status(404).send('Anamnesis not found');
      }
      res.json(anamnesis);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching anamnesis');
    }
  }

  async createAnamnesis(req: Request, res: Response) {
    try {
      const newAnamnesis = await this.anamnesisRepository.create(req.body);
      res.status(201).json(newAnamnesis);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error creating anamnesis');
    }
  }

  async updateAnamnesis(req: Request, res: Response) {
    try {
      const updatedAnamnesis = await this.anamnesisRepository.update(+req.params.id, req.body);
      res.json(updatedAnamnesis);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error updating anamnesis');
    }
  }

  async deleteAnamnesis(req: Request, res: Response) {
    try {
      await this.anamnesisRepository.delete(+req.params.id);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting anamnesis');
    }
  }
}

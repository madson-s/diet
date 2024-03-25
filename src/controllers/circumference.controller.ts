import { Request, Response } from 'express';
import { CircumferenceRepository } from '../repositories/circumference.repository'; 

export class CircumferenceController {
  private readonly circumferenceRepository: CircumferenceRepository;

  constructor(circumferenceRepository: CircumferenceRepository) {
    this.circumferenceRepository = circumferenceRepository;
  }

  async getAllCircumferences(req: Request, res: Response) {
    try {
      const circumferences = await this.circumferenceRepository.getAll();
      res.json(circumferences);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching circumferences');
    }
  }

  async getCircumferenceById(req: Request, res: Response) {
    try {
      const circumference = await this.circumferenceRepository.getById(+req.params.id);
      if (!circumference) {
        return res.status(404).send('Circumference not found');
      }
      res.json(circumference);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching circumference');
    }
  }

  async createCircumference(req: Request, res: Response) {
    try {
      const newCircumference = await this.circumferenceRepository.create(req.body);
      res.status(201).json(newCircumference);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error creating circumference');
    }
  }

  async updateCircumference(req: Request, res: Response) {
    try {
      const updatedCircumference = await this.circumferenceRepository.update(+req.params.id, req.body);
      res.json(updatedCircumference);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error updating circumference');
    }
  }

  async deleteCircumference(req: Request, res: Response) {
    try {
      await this.circumferenceRepository.delete(+req.params.id);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting circumference');
    }
  }
}

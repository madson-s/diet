import { Request, Response } from 'express';
import { LateralCircumferenceRepository } from '../repositories/lateralcircumference.repository'; 

export class LateralCircumferenceController {
  private readonly lateralCircumferenceRepository: LateralCircumferenceRepository;

  constructor(lateralCircumferenceRepository: LateralCircumferenceRepository) {
    this.lateralCircumferenceRepository = lateralCircumferenceRepository;
  }

  async getAllLateralCircumferences(req: Request, res: Response) {
    try {
      const lateralCircumferences = await this.lateralCircumferenceRepository.getAll();
      res.json(lateralCircumferences);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching lateral circumferences');
    }
  }

  async getLateralCircumferenceById(req: Request, res: Response) {
    try {
      const lateralCircumference = await this.lateralCircumferenceRepository.getById(+req.params.id);
      if (!lateralCircumference) {
        return res.status(404).send('Lateral circumference not found');
      }
      res.json(lateralCircumference);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching lateral circumference');
    }
  }

  async createLateralCircumference(req: Request, res: Response) {
    try {
      const newLateralCircumference = await this.lateralCircumferenceRepository.create(req.body);
      res.status(201).json(newLateralCircumference);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error creating lateral circumference');
    }
  }

  async updateLateralCircumference(req: Request, res: Response) {
    try {
      const updatedLateralCircumference = await this.lateralCircumferenceRepository.update(+req.params.id, req.body);
      res.json(updatedLateralCircumference);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error updating lateral circumference');
    }
  }

  async deleteLateralCircumference(req: Request, res: Response) {
    try {
      await this.lateralCircumferenceRepository.delete(+req.params.id);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting lateral circumference');
    }
  }
}

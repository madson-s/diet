import { Request, Response } from 'express';
import { BioimpedanceRepository } from '../repositories/bioimpedance.repository'; 

export class BioimpedanceController {
  private readonly bioimpedanceRepository: BioimpedanceRepository;

  constructor(bioimpedanceRepository: BioimpedanceRepository) {
    this.bioimpedanceRepository = bioimpedanceRepository;
  }

  async getAllBioimpedances(req: Request, res: Response) {
    try {
      const bioimpedances = await this.bioimpedanceRepository.getAll();
      res.json(bioimpedances);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching bioimpedances');
    }
  }

  async getBioimpedanceById(req: Request, res: Response) {
    try {
      const bioimpedance = await this.bioimpedanceRepository.getById(+req.params.id);
      if (!bioimpedance) {
        return res.status(404).send('Bioimpedance not found');
      }
      res.json(bioimpedance);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching bioimpedance');
    }
  }

  async createBioimpedance(req: Request, res: Response) {
    try {
      const newBioimpedance = await this.bioimpedanceRepository.create(req.body);
      res.status(201).json(newBioimpedance);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error creating bioimpedance');
    }
  }

  async updateBioimpedance(req: Request, res: Response) {
    try {
      const updatedBioimpedance = await this.bioimpedanceRepository.update(+req.params.id, req.body);
      res.json(updatedBioimpedance);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error updating bioimpedance');
    }
  }

  async deleteBioimpedance(req: Request, res: Response) {
    try {
      await this.bioimpedanceRepository.delete(+req.params.id);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting bioimpedance');
    }
  }
}

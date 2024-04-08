import { Request, Response } from 'express';
import { ValidationRepository } from '../repositories/validation.repository'; 

export class ValidationController {
  private readonly validationRepository: ValidationRepository;

  constructor(validationRepository: ValidationRepository) {
    this.validationRepository = validationRepository;
  }

  async getAllValidations(req: Request, res: Response) {
    try {
      const validations = await this.validationRepository.getAll();
      res.json(validations);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching validations');
    }
  }

  async getValidationById(req: Request, res: Response) {
    try {
      const validation = await this.validationRepository.getById(+req.params.id);
      if (!validation) {
        return res.status(404).send('Validation not found');
      }
      res.json(validation);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching validation');
    }
  }

  async createValidation(req: Request, res: Response) {
    try {
      const newValidation = await this.validationRepository.create(req.body);
      res.status(201).json(newValidation);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error creating validation');
    }
  }

  async updateValidation(req: Request, res: Response) {
    try {
      const updatedValidation = await this.validationRepository.update(+req.params.id, req.body);
      res.json(updatedValidation);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error updating validation');
    }
  }

  async deleteValidation(req: Request, res: Response) {
    try {
      await this.validationRepository.delete(+req.params.id);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting validation');
    }
  }
}

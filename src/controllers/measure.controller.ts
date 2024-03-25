import { Request, Response } from 'express';
import { MeasureRepository } from '../repositories/measure.repository'; 

export class MeasureController {
  private readonly measureRepository: MeasureRepository;

  constructor(measureRepository: MeasureRepository) {
    this.measureRepository = measureRepository;
  }

  async getAllMeasures(req: Request, res: Response) {
    try {
      const measures = await this.measureRepository.getAll();
      res.json(measures);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching measures');
    }
  }

  async getMeasureById(req: Request, res: Response) {
    try {
      const measure = await this.measureRepository.getById(+req.params.id);
      if (!measure) {
        return res.status(404).send('Measure not found');
      }
      res.json(measure);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching measure');
    }
  }

  async createMeasure(req: Request, res: Response) {
    try {
      const newMeasure = await this.measureRepository.create(req.body);
      res.status(201).json(newMeasure);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error creating measure');
    }
  }

  async updateMeasure(req: Request, res: Response) {
    try {
      const updatedMeasure = await this.measureRepository.update(+req.params.id, req.body);
      res.json(updatedMeasure);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error updating measure');
    }
  }

  async deleteMeasure(req: Request, res: Response) {
    try {
      await this.measureRepository.delete(+req.params.id);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting measure');
    }
  }
}

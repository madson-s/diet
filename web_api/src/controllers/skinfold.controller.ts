import { Request, Response } from 'express';
import { SkinFoldRepository } from '../repositories/skinfold.repository'; 

export class SkinFoldController {
  private readonly skinFoldRepository: SkinFoldRepository;

  constructor(skinFoldRepository: SkinFoldRepository) {
    this.skinFoldRepository = skinFoldRepository;
  }

  async getAllSkinFolds(req: Request, res: Response) {
    try {
      const skinFolds = await this.skinFoldRepository.getAll();
      res.json(skinFolds);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching skin folds');
    }
  }

  async getSkinFoldById(req: Request, res: Response) {
    try {
      const skinFold = await this.skinFoldRepository.getById(+req.params.id);
      if (!skinFold) {
        return res.status(404).send('Skin fold not found');
      }
      res.json(skinFold);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching skin fold');
    }
  }

  async createSkinFold(req: Request, res: Response) {
    try {
      const newSkinFold = await this.skinFoldRepository.create(req.body);
      res.status(201).json(newSkinFold);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error creating skin fold');
    }
  }

  async updateSkinFold(req: Request, res: Response) {
    try {
      const updatedSkinFold = await this.skinFoldRepository.update(+req.params.id, req.body);
      res.json(updatedSkinFold);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error updating skin fold');
    }
  }

  async deleteSkinFold(req: Request, res: Response) {
    try {
      await this.skinFoldRepository.delete(+req.params.id);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting skin fold');
    }
  }
}

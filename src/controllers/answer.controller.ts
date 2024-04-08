import { Request, Response } from 'express';
import { AnswerRepository } from '../repositories/answer.repository'; 

export class AnswerController {
  private readonly answerRepository: AnswerRepository;

  constructor(answerRepository: AnswerRepository) {
    this.answerRepository = answerRepository;
  }

  async getAllAnswers(req: Request, res: Response) {
    try {
      const answers = await this.answerRepository.getAll();
      res.json(answers);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching answers');
    }
  }

  async getAnswerById(req: Request, res: Response) {
    try {
      const answer = await this.answerRepository.getById(+req.params.id);
      if (!answer) {
        return res.status(404).send('Answer not found');
      }
      res.json(answer);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching answer');
    }
  }

  async createAnswer(req: Request, res: Response) {
    try {
      const newAnswer = await this.answerRepository.create(req.body);
      res.status(201).json(newAnswer);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error creating answer');
    }
  }

  async updateAnswer(req: Request, res: Response) {
    try {
      const updatedAnswer = await this.answerRepository.update(+req.params.id, req.body);
      res.json(updatedAnswer);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error updating answer');
    }
  }

  async deleteAnswer(req: Request, res: Response) {
    try {
      await this.answerRepository.delete(+req.params.id);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting answer');
    }
  }
}

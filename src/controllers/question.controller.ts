import { Request, Response } from 'express';
import { QuestionRepository } from '../repositories/question.repository'; 

export class QuestionController {
  private readonly questionRepository: QuestionRepository;

  constructor(questionRepository: QuestionRepository) {
    this.questionRepository = questionRepository;
  }

  async getAllQuestions(req: Request, res: Response) {
    try {
      const questions = await this.questionRepository.getAll();
      res.json(questions);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching questions');
    }
  }

  async getQuestionById(req: Request, res: Response) {
    try {
      const question = await this.questionRepository.getById(+req.params.id);
      if (!question) {
        return res.status(404).send('Question not found');
      }
      res.json(question);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching question');
    }
  }

  async createQuestion(req: Request, res: Response) {
    try {
      const newQuestion = await this.questionRepository.create(req.body);
      res.status(201).json(newQuestion);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error creating question');
    }
  }

  async updateQuestion(req: Request, res: Response) {
    try {
      const updatedQuestion = await this.questionRepository.update(+req.params.id, req.body);
      res.json(updatedQuestion);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error updating question');
    }
  }

  async deleteQuestion(req: Request, res: Response) {
    try {
      await this.questionRepository.delete(+req.params.id);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting question');
    }
  }
}

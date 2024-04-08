import { Request, Response } from 'express';
import { QuizRepository } from '../repositories/quiz.repository'; 

export class QuizController {
  private readonly quizRepository: QuizRepository;

  constructor(quizRepository: QuizRepository) {
    this.quizRepository = quizRepository;
  }

  async getAllQuizzes(req: Request, res: Response) {
    try {
      const quizzes = await this.quizRepository.getAll();
      res.json(quizzes);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching quizzes');
    }
  }

  async getQuizById(req: Request, res: Response) {
    try {
      const quiz = await this.quizRepository.getById(+req.params.id);
      if (!quiz) {
        return res.status(404).send('Quiz not found');
      }
      res.json(quiz);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching quiz');
    }
  }

  async createQuiz(req: Request, res: Response) {
    try {
      const newQuiz = await this.quizRepository.create(req.body);
      res.status(201).json(newQuiz);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error creating quiz');
    }
  }

  async updateQuiz(req: Request, res: Response) {
    try {
      const updatedQuiz = await this.quizRepository.update(+req.params.id, req.body);
      res.json(updatedQuiz);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error updating quiz');
    }
  }

  async deleteQuiz(req: Request, res: Response) {
    try {
      await this.quizRepository.delete(+req.params.id);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting quiz');
    }
  }
}

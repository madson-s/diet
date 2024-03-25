import { Router } from 'express';
import { makeQuizController } from '../factories/controllers/quiz_controller.factory'; 

const quizController = makeQuizController();

export default (router: Router) => {
  router.get('/quizzes', (req, res) => quizController.getAllQuizzes(req, res));
  router.get('/quizzes/:id', (req, res) => quizController.getQuizById(req, res));
  router.post('/quizzes', (req, res) => quizController.createQuiz(req, res));
  router.put('/quizzes/:id', (req, res) => quizController.updateQuiz(req, res));
  router.delete('/quizzes/:id', (req, res) => quizController.deleteQuiz(req, res));
};

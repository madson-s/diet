import { Router } from 'express';
import { makeQuestionController } from '../factories/controllers/question_controller.factory'; 

const questionController = makeQuestionController();

export default (router: Router) => {
  router.get('/questions', (req, res) => questionController.getAllQuestions(req, res));
  router.get('/questions/:id', (req, res) => questionController.getQuestionById(req, res));
  router.post('/questions', (req, res) => questionController.createQuestion(req, res));
  router.put('/questions/:id', (req, res) => questionController.updateQuestion(req, res));
  router.delete('/questions/:id', (req, res) => questionController.deleteQuestion(req, res));
};

import { Router } from 'express';
import { makeAnswerController } from '../factories/controllers/answer_controller.factory'; // Certifique-se de usar o caminho correto

const answerController = makeAnswerController();

export default (router: Router) => {
  router.get('/answers', (req, res) => answerController.getAllAnswers(req, res));
  router.get('/answers/:id', (req, res) => answerController.getAnswerById(req, res));
  router.post('/answers', (req, res) => answerController.createAnswer(req, res));
  router.put('/answers/:id', (req, res) => answerController.updateAnswer(req, res));
  router.delete('/answers/:id', (req, res) => answerController.deleteAnswer(req, res));
};

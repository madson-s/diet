"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quiz_controller_factory_1 = require("../factories/controllers/quiz_controller.factory");
const quizController = (0, quiz_controller_factory_1.makeQuizController)();
exports.default = (router) => {
    router.get('/quizzes', (req, res) => quizController.getAllQuizzes(req, res));
    router.get('/quizzes/:id', (req, res) => quizController.getQuizById(req, res));
    router.post('/quizzes', (req, res) => quizController.createQuiz(req, res));
    router.put('/quizzes/:id', (req, res) => quizController.updateQuiz(req, res));
    router.delete('/quizzes/:id', (req, res) => quizController.deleteQuiz(req, res));
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const answer_controller_factory_1 = require("../factories/controllers/answer_controller.factory");
const answerController = (0, answer_controller_factory_1.makeAnswerController)();
exports.default = (router) => {
    router.get('/answers', (req, res) => answerController.getAllAnswers(req, res));
    router.get('/answers/:id', (req, res) => answerController.getAnswerById(req, res));
    router.post('/answers', (req, res) => answerController.createAnswer(req, res));
    router.put('/answers/:id', (req, res) => answerController.updateAnswer(req, res));
    router.delete('/answers/:id', (req, res) => answerController.deleteAnswer(req, res));
};

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionController = void 0;
class QuestionController {
    constructor(questionRepository) {
        this.questionRepository = questionRepository;
    }
    getAllQuestions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const questions = yield this.questionRepository.getAll();
                res.json(questions);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching questions');
            }
        });
    }
    getQuestionById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const question = yield this.questionRepository.getById(+req.params.id);
                if (!question) {
                    return res.status(404).send('Question not found');
                }
                res.json(question);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching question');
            }
        });
    }
    createQuestion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newQuestion = yield this.questionRepository.create(req.body);
                res.status(201).json(newQuestion);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error creating question');
            }
        });
    }
    updateQuestion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedQuestion = yield this.questionRepository.update(+req.params.id, req.body);
                res.json(updatedQuestion);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error updating question');
            }
        });
    }
    deleteQuestion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.questionRepository.delete(+req.params.id);
                res.status(204).send();
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error deleting question');
            }
        });
    }
}
exports.QuestionController = QuestionController;

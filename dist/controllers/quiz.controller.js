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
exports.QuizController = void 0;
class QuizController {
    constructor(quizRepository) {
        this.quizRepository = quizRepository;
    }
    getAllQuizzes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const quizzes = yield this.quizRepository.getAll();
                res.json(quizzes);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching quizzes');
            }
        });
    }
    getQuizById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const quiz = yield this.quizRepository.getById(+req.params.id);
                if (!quiz) {
                    return res.status(404).send('Quiz not found');
                }
                res.json(quiz);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching quiz');
            }
        });
    }
    createQuiz(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newQuiz = yield this.quizRepository.create(req.body);
                res.status(201).json(newQuiz);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error creating quiz');
            }
        });
    }
    updateQuiz(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedQuiz = yield this.quizRepository.update(+req.params.id, req.body);
                res.json(updatedQuiz);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error updating quiz');
            }
        });
    }
    deleteQuiz(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.quizRepository.delete(+req.params.id);
                res.status(204).send();
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error deleting quiz');
            }
        });
    }
}
exports.QuizController = QuizController;

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
exports.AnswerController = void 0;
class AnswerController {
    constructor(answerRepository) {
        this.answerRepository = answerRepository;
    }
    getAllAnswers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const answers = yield this.answerRepository.getAll();
                res.json(answers);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching answers');
            }
        });
    }
    getAnswerById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const answer = yield this.answerRepository.getById(+req.params.id);
                if (!answer) {
                    return res.status(404).send('Answer not found');
                }
                res.json(answer);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching answer');
            }
        });
    }
    createAnswer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newAnswer = yield this.answerRepository.create(req.body);
                res.status(201).json(newAnswer);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error creating answer');
            }
        });
    }
    updateAnswer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedAnswer = yield this.answerRepository.update(+req.params.id, req.body);
                res.json(updatedAnswer);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error updating answer');
            }
        });
    }
    deleteAnswer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.answerRepository.delete(+req.params.id);
                res.status(204).send();
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error deleting answer');
            }
        });
    }
}
exports.AnswerController = AnswerController;

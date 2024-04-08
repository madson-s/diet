"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeQuizController = void 0;
const quiz_controller_1 = require("../../controllers/quiz.controller");
const quiz_repository_1 = require("../../repositories/quiz.repository");
function makeQuizController() {
    const repository = new quiz_repository_1.QuizRepository();
    return new quiz_controller_1.QuizController(repository);
}
exports.makeQuizController = makeQuizController;

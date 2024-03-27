"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeQuestionController = void 0;
const question_controller_1 = require("../../controllers/question.controller");
const question_repository_1 = require("../../repositories/question.repository");
function makeQuestionController() {
    const repository = new question_repository_1.QuestionRepository();
    return new question_controller_1.QuestionController(repository);
}
exports.makeQuestionController = makeQuestionController;

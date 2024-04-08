"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAnswerController = void 0;
const answer_controller_1 = require("../../controllers/answer.controller");
const answer_repository_1 = require("../../repositories/answer.repository");
function makeAnswerController() {
    const repository = new answer_repository_1.AnswerRepository();
    return new answer_controller_1.AnswerController(repository);
}
exports.makeAnswerController = makeAnswerController;

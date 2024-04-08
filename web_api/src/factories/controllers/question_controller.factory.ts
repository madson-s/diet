import { QuestionController } from "../../controllers/question.controller";
import { QuestionRepository } from "../../repositories/question.repository";

export function makeQuestionController(): QuestionController {
  const repository = new QuestionRepository();
  return new QuestionController(repository);
}
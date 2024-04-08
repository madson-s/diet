import { QuizController } from "../../controllers/quiz.controller";
import { QuizRepository } from "../../repositories/quiz.repository";

export function makeQuizController(): QuizController {
  const repository = new QuizRepository();
  return new QuizController(repository);
}
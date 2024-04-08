import { AnswerController } from "../../controllers/answer.controller";
import { AnswerRepository } from "../../repositories/answer.repository";

export function makeAnswerController(): AnswerController {
  const repository = new AnswerRepository();
  return new AnswerController(repository);
}
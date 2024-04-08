import { ValidationController } from "../../controllers/validation.controller";
import { ValidationRepository } from "../../repositories/validation.repository";

export function makeValidationController(): ValidationController {
  const repository = new ValidationRepository();
  return new ValidationController(repository);
}
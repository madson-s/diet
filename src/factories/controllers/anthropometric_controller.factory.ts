import { AnthropometricController } from "../../controllers/anthropometric.controller";
import { AnthropometricRepository } from "../../repositories/anthropometric.repository";

export function makeAnthropometricController(): AnthropometricController {
  const repository = new AnthropometricRepository();
  return new AnthropometricController(repository);
}
import { PortionController } from "../../controllers/portion.controller";
import { PortionRepository } from "../../repositories/portion.repository";

export function makePortionController(): PortionController {
  const repository = new PortionRepository();
  return new PortionController(repository);
}
import { BioimpedanceController } from "../../controllers/bioimpedance.controller";
import { BioimpedanceRepository } from "../../repositories/bioimpedance.repository";

export function makeBioimpedanceController(): BioimpedanceController {
  const repository = new BioimpedanceRepository();
  return new BioimpedanceController(repository);
}
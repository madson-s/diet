import { AnamnesisController } from "../../controllers/anamnesis.controller";
import { AnamnesisRepository } from "../../repositories/anamnesis.repository";

export function makeAnamnesisController(): AnamnesisController {
  const repository = new AnamnesisRepository();
  return new AnamnesisController(repository);
}
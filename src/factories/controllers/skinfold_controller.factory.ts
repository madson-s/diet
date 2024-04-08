import { SkinFoldController } from "../../controllers/skinfold.controller";
import { SkinFoldRepository } from "../../repositories/skinfold.repository";

export function makeSkinFoldController(): SkinFoldController {
  const repository = new SkinFoldRepository();
  return new SkinFoldController(repository);
}
import { CircumferenceController } from "../../controllers/circumference.controller";
import { CircumferenceRepository } from "../../repositories/circumference.repository";

export function makeCircumferenceController(): CircumferenceController {
  const repository = new CircumferenceRepository();
  return new CircumferenceController(repository);
}
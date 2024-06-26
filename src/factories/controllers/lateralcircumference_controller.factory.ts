import { LateralCircumferenceController } from "../../controllers/lateralcircumference.controller";
import { LateralCircumferenceRepository } from "../../repositories/lateralcircumference.repository";

export function makeLateralCircumferenceController(): LateralCircumferenceController {
  const repository = new LateralCircumferenceRepository();
  return new LateralCircumferenceController(repository);
}
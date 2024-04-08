import { MeasureController } from "../../controllers/measure.controller";
import { MeasureRepository } from "../../repositories/measure.repository";

export function makeMeasureController(): MeasureController {
  const repository = new MeasureRepository();
  return new MeasureController(repository);
}
import { PatientController } from "../../controllers/patient.controller";
import { PatientRepository } from "../../repositories/patient.repository";

export function makePatientController(): PatientController {
  const repository = new PatientRepository();
  return new PatientController(repository);
}
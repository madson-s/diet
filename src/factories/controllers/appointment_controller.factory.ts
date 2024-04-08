import { AppointmentController } from "../../controllers/appointment.controller";
import { AppointmentRepository } from "../../repositories/appointment.repository";

export function makeAppointmentController(): AppointmentController {
  const repository = new AppointmentRepository();
  return new AppointmentController(repository);
}
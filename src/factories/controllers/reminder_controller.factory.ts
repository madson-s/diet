import { ReminderController } from "../../controllers/reminder.controller";
import { ReminderRepository } from "../../repositories/reminder.repository";

export function makeReminderController(): ReminderController {
  const repository = new ReminderRepository();
  return new ReminderController(repository);
}
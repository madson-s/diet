"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeReminderController = void 0;
const reminder_controller_1 = require("../../controllers/reminder.controller");
const reminder_repository_1 = require("../../repositories/reminder.repository");
function makeReminderController() {
    const repository = new reminder_repository_1.ReminderRepository();
    return new reminder_controller_1.ReminderController(repository);
}
exports.makeReminderController = makeReminderController;

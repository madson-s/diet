"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reminder_controller_factory_1 = require("../factories/controllers/reminder_controller.factory");
const reminderController = (0, reminder_controller_factory_1.makeReminderController)();
exports.default = (router) => {
    router.get('/reminders', (req, res) => reminderController.getAllReminders(req, res));
    router.get('/reminders/:id', (req, res) => reminderController.getReminderById(req, res));
    router.post('/reminders', (req, res) => reminderController.createReminder(req, res));
    router.put('/reminders/:id', (req, res) => reminderController.updateReminder(req, res));
    router.delete('/reminders/:id', (req, res) => reminderController.deleteReminder(req, res));
};

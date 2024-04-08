"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReminderController = void 0;
class ReminderController {
    constructor(reminderRepository) {
        this.reminderRepository = reminderRepository;
    }
    getAllReminders(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reminders = yield this.reminderRepository.getAll();
                res.json(reminders);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching reminders');
            }
        });
    }
    getReminderById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reminder = yield this.reminderRepository.getById(+req.params.id);
                if (!reminder) {
                    return res.status(404).send('Reminder not found');
                }
                res.json(reminder);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching reminder');
            }
        });
    }
    createReminder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newReminder = yield this.reminderRepository.create(req.body);
                res.status(201).json(newReminder);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error creating reminder');
            }
        });
    }
    updateReminder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedReminder = yield this.reminderRepository.update(+req.params.id, req.body);
                res.json(updatedReminder);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error updating reminder');
            }
        });
    }
    deleteReminder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.reminderRepository.delete(+req.params.id);
                res.status(204).send();
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error deleting reminder');
            }
        });
    }
}
exports.ReminderController = ReminderController;

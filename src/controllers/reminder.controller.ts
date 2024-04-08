import { Request, Response } from 'express';
import { ReminderRepository } from '../repositories/reminder.repository'; 

export class ReminderController {
  private readonly reminderRepository: ReminderRepository;

  constructor(reminderRepository: ReminderRepository) {
    this.reminderRepository = reminderRepository;
  }

  async getAllReminders(req: Request, res: Response) {
    try {
      const reminders = await this.reminderRepository.getAll();
      res.json(reminders);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching reminders');
    }
  }

  async getReminderById(req: Request, res: Response) {
    try {
      const reminder = await this.reminderRepository.getById(+req.params.id);
      if (!reminder) {
        return res.status(404).send('Reminder not found');
      }
      res.json(reminder);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching reminder');
    }
  }

  async createReminder(req: Request, res: Response) {
    try {
      const newReminder = await this.reminderRepository.create(req.body);
      res.status(201).json(newReminder);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error creating reminder');
    }
  }

  async updateReminder(req: Request, res: Response) {
    try {
      const updatedReminder = await this.reminderRepository.update(+req.params.id, req.body);
      res.json(updatedReminder);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error updating reminder');
    }
  }

  async deleteReminder(req: Request, res: Response) {
    try {
      await this.reminderRepository.delete(+req.params.id);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting reminder');
    }
  }
}

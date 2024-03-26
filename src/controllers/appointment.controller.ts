import { Request, Response } from 'express';
import { AppointmentRepository } from '../repositories/appointment.repository'; 

export class AppointmentController {
  private readonly appointmentRepository: AppointmentRepository;

  constructor(appointmentRepository: AppointmentRepository) {
    this.appointmentRepository = appointmentRepository;
  }

  async getAllAppointments(req: Request, res: Response) {
    try {
      const appointments = await this.appointmentRepository.getAll();
      res.json(appointments);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching appointments');
    }
  }

  async getAppointmentById(req: Request, res: Response) {
    try {
      const appointment = await this.appointmentRepository.getById(+req.params.id);
      if (!appointment) {
        return res.status(404).send('Appointment not found');
      }
      res.json(appointment);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching appointment');
    }
  }

  async createAppointment(req: Request, res: Response) {
    try {
      const newAppointment = await this.appointmentRepository.create(req.body);
      res.status(201).json(newAppointment);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error creating appointment');
    }
  }

  async updateAppointment(req: Request, res: Response) {
    try {
      const updatedAppointment = await this.appointmentRepository.update(+req.params.id, req.body);
      res.json(updatedAppointment);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error updating appointment');
    }
  }

  async deleteAppointment(req: Request, res: Response) {
    try {
      await this.appointmentRepository.delete(+req.params.id);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting appointment');
    }
  }
}

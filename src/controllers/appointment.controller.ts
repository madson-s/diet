import { Request, Response } from 'express';
import { AppointmentRepository } from '../repositories/appointment.repository';

function PrismaParser(appointment: any): any {
  const {
    anamnesis,
    reminder: { meals },
    anthropometric: { bioimpedance, skinFold, circumference, ...anthropometricRest },
    anthropometric,
    ...appointmentRest
  } = appointment;
  return {
    ...appointmentRest,
    anamnesis: {
      create: anamnesis,
    },
    reminder: {
      create: {
        meals: {
          create: meals.map((meal: any) => ({
            ...meal,
            portions: {
              create: meal.portions,
            },
          })),
        },
      },
    },
    anthropometric: {
      create: {
        ...anthropometricRest,
        bioimpedance: {
          create: bioimpedance,
        },
        skinFold: {
          create: skinFold,
        },
        circumference: {
          create: {
            ...circumference,
            laterals: {
              create: circumference.laterals,
            },
          },
        },
      },
    },
  }
}

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

  async syncAppointment(req: Request, res: Response) {
    try {
      const { lastSync } = req.query;
      if (!lastSync) return res.status(400).send('lastSync query is required');
      const lastSyncDate = new Date(+lastSync);
      const arrayData = [];
      for (const data of req.body) {
        const appointment = PrismaParser(data);
        arrayData.push(appointment)
      }
      const updatedAppointments = await this.appointmentRepository.getAllSync(lastSyncDate);
      const createdAppointments = await this.appointmentRepository.createMany(req.body);
      res.status(201).json({ updatedAppointments, createdAppointments });
    } catch (error) {
      console.error(error);
      res.status(400).send('Error creating patient');
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

import { Request, Response } from 'express';
import { PatientRepository } from '../repositories/patient.repository'; // Ensure the correct path is used

export class PatientController {
  private readonly patientRepository: PatientRepository;

  constructor(patientRepository: PatientRepository) {
    this.patientRepository = patientRepository;
  }

  async getAllPatients(req: Request, res: Response) {
    try {
      const patients = await this.patientRepository.getAll();
      res.json(patients);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching patients');
    }
  }

  async getPatientById(req: Request, res: Response) {
    try {
      const patient = await this.patientRepository.getById(req.params.id);
      if (!patient) {
        return res.status(404).send('Patient not found');
      }
      res.json(patient);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching patient');
    }
  }

  async createPatient(req: Request, res: Response) {
    try {
      const newPatient = await this.patientRepository.create(req.body);
      res.status(201).json(newPatient);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error creating patient');
    }
  }

  async updatePatient(req: Request, res: Response) {
    try {
      const updatedPatient = await this.patientRepository.update(req.params.id, req.body);
      res.json(updatedPatient);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error updating patient');
    }
  }

  async deletePatient(req: Request, res: Response) {
    try {
      await this.patientRepository.delete(req.params.id);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting patient');
    }
  }
}

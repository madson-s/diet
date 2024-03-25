import { Router } from 'express';
import { makePatientController } from '../factories/controllers/patient_controller.factory';

const patientController = makePatientController(); 

export default (router: Router) => {
  router.get('/patients', (req, res) => patientController.getAllPatients(req, res));
  router.get('/patients/:id', (req, res) => patientController.getPatientById(req, res));
  router.post('/patients', (req, res) => patientController.createPatient(req, res));
  router.put('/patients/:id', (req, res) => patientController.updatePatient(req, res));
  router.delete('/patients/:id', (req, res) => patientController.deletePatient(req, res));
};
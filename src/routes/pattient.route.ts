import { Router } from 'express';
import { makePatientController } from '../factories/controllers/patient_controller.factory';

const patientController = makePatientController(); 

export default (router: Router) => {
  router.get('/patients', patientController.getAllPatients);
  router.get('/patients/:id', patientController.getPatientById);
  router.post('/patients', patientController.createPatient);
  router.put('/patients/:id', patientController.updatePatient);
  router.delete('/patients/:id', patientController.deletePatient);
};
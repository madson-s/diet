import { Router } from 'express';
import { makeAppointmentController } from '../factories/controllers/appointment_controller.factory'; 

const appointmentController = makeAppointmentController();

export default (router: Router) => {
  router.get('/appointments', (req, res) => appointmentController.getAllAppointments(req, res));
  router.get('/appointments/:id', (req, res) => appointmentController.getAppointmentById(req, res));
  router.post('/appointments', (req, res) => appointmentController.createAppointment(req, res));
  router.post('/appointments/sync', (req, res) => appointmentController.syncAppointment(req, res));
  router.put('/appointments/:id', (req, res) => appointmentController.updateAppointment(req, res));
  router.delete('/appointments/:id', (req, res) => appointmentController.deleteAppointment(req, res));
};

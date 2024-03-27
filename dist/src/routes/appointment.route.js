"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appointment_controller_factory_1 = require("../factories/controllers/appointment_controller.factory");
const appointmentController = (0, appointment_controller_factory_1.makeAppointmentController)();
exports.default = (router) => {
    router.get('/appointments', (req, res) => appointmentController.getAllAppointments(req, res));
    router.get('/appointments/:id', (req, res) => appointmentController.getAppointmentById(req, res));
    router.post('/appointments', (req, res) => appointmentController.createAppointment(req, res));
    router.put('/appointments/:id', (req, res) => appointmentController.updateAppointment(req, res));
    router.delete('/appointments/:id', (req, res) => appointmentController.deleteAppointment(req, res));
};

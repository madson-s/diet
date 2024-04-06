"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAppointmentController = void 0;
const appointment_controller_1 = require("../../controllers/appointment.controller");
const appointment_repository_1 = require("../../repositories/appointment.repository");
function makeAppointmentController() {
    const repository = new appointment_repository_1.AppointmentRepository();
    return new appointment_controller_1.AppointmentController(repository);
}
exports.makeAppointmentController = makeAppointmentController;

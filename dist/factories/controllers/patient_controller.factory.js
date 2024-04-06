"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePatientController = void 0;
const patient_controller_1 = require("../../controllers/patient.controller");
const patient_repository_1 = require("../../repositories/patient.repository");
function makePatientController() {
    const repository = new patient_repository_1.PatientRepository();
    return new patient_controller_1.PatientController(repository);
}
exports.makePatientController = makePatientController;

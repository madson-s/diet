"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const patient_controller_factory_1 = require("../factories/controllers/patient_controller.factory");
const patientController = (0, patient_controller_factory_1.makePatientController)();
exports.default = (router) => {
    router.get('/patients', (req, res) => patientController.getAllPatients(req, res));
    router.get('/patients/:id', (req, res) => patientController.getPatientById(req, res));
    router.post('/patients', (req, res) => patientController.createPatient(req, res));
    router.post('/patients/sync', (req, res) => patientController.syncPatient(req, res));
    router.put('/patients/:id', (req, res) => patientController.updatePatient(req, res));
    router.delete('/patients/:id', (req, res) => patientController.deletePatient(req, res));
};

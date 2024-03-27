"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const patient_controller_factory_1 = require("../factories/controllers/patient_controller.factory");
const patientController = (0, patient_controller_factory_1.PatientControllerFactory)();
exports.default = (router) => {
    router.get('/patients', patientController.getAllPatients);
    router.get('/patients/:id', patientController.getPatientById);
    router.post('/patients', patientController.createPatient);
    router.put('/patients/:id', patientController.updatePatient);
    router.delete('/patients/:id', patientController.deletePatient);
};

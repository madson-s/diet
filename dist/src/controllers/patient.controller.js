"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientController = void 0;
class PatientController {
    constructor(patientRepository) {
        this.patientRepository = patientRepository;
    }
    getAllPatients(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const patients = yield this.patientRepository.getAll();
                res.json(patients);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching patients');
            }
        });
    }
    getPatientById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const patient = yield this.patientRepository.getById(+req.params.id);
                if (!patient) {
                    return res.status(404).send('Patient not found');
                }
                res.json(patient);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching patient');
            }
        });
    }
    createPatient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newPatient = yield this.patientRepository.create(req.body);
                res.status(201).json(newPatient);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error creating patient');
            }
        });
    }
    updatePatient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedPatient = yield this.patientRepository.update(+req.params.id, req.body);
                res.json(updatedPatient);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error updating patient');
            }
        });
    }
    deletePatient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.patientRepository.delete(+req.params.id);
                res.status(204).send();
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error deleting patient');
            }
        });
    }
}
exports.PatientController = PatientController;

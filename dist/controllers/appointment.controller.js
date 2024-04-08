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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentController = void 0;
function PrismaParser(appointment) {
    const { anamnesis, reminder: { meals } } = appointment, _a = appointment.anthropometric, { bioimpedance, skinFold, circumference } = _a, anthropometricRest = __rest(_a, ["bioimpedance", "skinFold", "circumference"]), { anthropometric } = appointment, appointmentRest = __rest(appointment, ["anamnesis", "reminder", "anthropometric", "anthropometric"]);
    return Object.assign(Object.assign({}, appointmentRest), { anamnesis: {
            create: anamnesis,
        }, reminder: {
            create: {
                meals: {
                    create: meals.map((meal) => (Object.assign(Object.assign({}, meal), { portions: {
                            create: meal.portions,
                        } }))),
                },
            },
        }, anthropometric: {
            create: Object.assign(Object.assign({}, anthropometricRest), { bioimpedance: {
                    create: bioimpedance,
                }, skinFold: {
                    create: skinFold,
                }, circumference: {
                    create: Object.assign(Object.assign({}, circumference), { laterals: {
                            create: circumference.laterals,
                        } }),
                } }),
        } });
}
class AppointmentController {
    constructor(appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }
    getAllAppointments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const appointments = yield this.appointmentRepository.getAll();
                res.json(appointments);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching appointments');
            }
        });
    }
    getAppointmentById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const appointment = yield this.appointmentRepository.getById(+req.params.id);
                if (!appointment) {
                    return res.status(404).send('Appointment not found');
                }
                res.json(appointment);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching appointment');
            }
        });
    }
    createAppointment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newAppointment = yield this.appointmentRepository.create(req.body);
                res.status(201).json(newAppointment);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error creating appointment');
            }
        });
    }
    syncAppointment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { lastSync } = req.query;
                if (!lastSync)
                    return res.status(400).send('lastSync query is required');
                const lastSyncDate = new Date(+lastSync);
                const arrayData = [];
                for (const data of req.body) {
                    const appointment = PrismaParser(data);
                    arrayData.push(appointment);
                }
                const updatedAppointments = yield this.appointmentRepository.getAllSync(lastSyncDate);
                const createdAppointments = yield this.appointmentRepository.createMany(req.body);
                res.status(201).json({ updatedAppointments, createdAppointments });
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error creating patient');
            }
        });
    }
    updateAppointment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedAppointment = yield this.appointmentRepository.update(+req.params.id, req.body);
                res.json(updatedAppointment);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error updating appointment');
            }
        });
    }
    deleteAppointment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.appointmentRepository.delete(+req.params.id);
                res.status(204).send();
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error deleting appointment');
            }
        });
    }
}
exports.AppointmentController = AppointmentController;

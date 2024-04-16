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
exports.PatientRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PatientRepository {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const patient = yield prisma.patient.create({ data });
            return patient;
        });
    }
    createMany(arrayData) {
        return __awaiter(this, void 0, void 0, function* () {
            const patients = yield prisma.$transaction(arrayData.map((data) => {
                data.birthDate = new Date(data.birthDate);
                return prisma.patient.create({ data, select: { id: true } });
            }));
            return patients;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.patient.findMany();
        });
    }
    getAllSync(lastSyncDate) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.patient.findMany({
                where: {
                    updatedAt: { gte: lastSyncDate }
                }
            });
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.patient.findUnique({
                where: { id }
            });
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.patient.update({
                where: { id },
                data
            });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.patient.delete({
                where: { id }
            });
        });
    }
}
exports.PatientRepository = PatientRepository;

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
exports.AnthropometricController = void 0;
class AnthropometricController {
    constructor(anthropometricRepository) {
        this.anthropometricRepository = anthropometricRepository;
    }
    getAllAnthropometrics(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const anthropometrics = yield this.anthropometricRepository.getAll();
                res.json(anthropometrics);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching anthropometrics');
            }
        });
    }
    getAnthropometricById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const anthropometric = yield this.anthropometricRepository.getById(+req.params.id);
                if (!anthropometric) {
                    return res.status(404).send('Anthropometric not found');
                }
                res.json(anthropometric);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching anthropometric');
            }
        });
    }
    createAnthropometric(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newAnthropometric = yield this.anthropometricRepository.create(req.body);
                res.status(201).json(newAnthropometric);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error creating anthropometric');
            }
        });
    }
    updateAnthropometric(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedAnthropometric = yield this.anthropometricRepository.update(+req.params.id, req.body);
                res.json(updatedAnthropometric);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error updating anthropometric');
            }
        });
    }
    deleteAnthropometric(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.anthropometricRepository.delete(+req.params.id);
                res.status(204).send();
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error deleting anthropometric');
            }
        });
    }
}
exports.AnthropometricController = AnthropometricController;

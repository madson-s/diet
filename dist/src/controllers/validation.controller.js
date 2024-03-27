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
exports.ValidationController = void 0;
class ValidationController {
    constructor(validationRepository) {
        this.validationRepository = validationRepository;
    }
    getAllValidations(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validations = yield this.validationRepository.getAll();
                res.json(validations);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching validations');
            }
        });
    }
    getValidationById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validation = yield this.validationRepository.getById(+req.params.id);
                if (!validation) {
                    return res.status(404).send('Validation not found');
                }
                res.json(validation);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching validation');
            }
        });
    }
    createValidation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newValidation = yield this.validationRepository.create(req.body);
                res.status(201).json(newValidation);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error creating validation');
            }
        });
    }
    updateValidation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedValidation = yield this.validationRepository.update(+req.params.id, req.body);
                res.json(updatedValidation);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error updating validation');
            }
        });
    }
    deleteValidation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.validationRepository.delete(+req.params.id);
                res.status(204).send();
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error deleting validation');
            }
        });
    }
}
exports.ValidationController = ValidationController;

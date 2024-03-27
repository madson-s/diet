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
exports.AnamnesisController = void 0;
class AnamnesisController {
    constructor(anamnesisRepository) {
        this.anamnesisRepository = anamnesisRepository;
    }
    getAllAnamnesis(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const anamnesis = yield this.anamnesisRepository.getAll();
                res.json(anamnesis);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching anamnesis');
            }
        });
    }
    getAnamnesisById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const anamnesis = yield this.anamnesisRepository.getById(+req.params.id);
                if (!anamnesis) {
                    return res.status(404).send('Anamnesis not found');
                }
                res.json(anamnesis);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching anamnesis');
            }
        });
    }
    createAnamnesis(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newAnamnesis = yield this.anamnesisRepository.create(req.body);
                res.status(201).json(newAnamnesis);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error creating anamnesis');
            }
        });
    }
    updateAnamnesis(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedAnamnesis = yield this.anamnesisRepository.update(+req.params.id, req.body);
                res.json(updatedAnamnesis);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error updating anamnesis');
            }
        });
    }
    deleteAnamnesis(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.anamnesisRepository.delete(+req.params.id);
                res.status(204).send();
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error deleting anamnesis');
            }
        });
    }
}
exports.AnamnesisController = AnamnesisController;

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
exports.BioimpedanceController = void 0;
class BioimpedanceController {
    constructor(bioimpedanceRepository) {
        this.bioimpedanceRepository = bioimpedanceRepository;
    }
    getAllBioimpedances(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bioimpedances = yield this.bioimpedanceRepository.getAll();
                res.json(bioimpedances);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching bioimpedances');
            }
        });
    }
    getBioimpedanceById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bioimpedance = yield this.bioimpedanceRepository.getById(+req.params.id);
                if (!bioimpedance) {
                    return res.status(404).send('Bioimpedance not found');
                }
                res.json(bioimpedance);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching bioimpedance');
            }
        });
    }
    createBioimpedance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newBioimpedance = yield this.bioimpedanceRepository.create(req.body);
                res.status(201).json(newBioimpedance);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error creating bioimpedance');
            }
        });
    }
    updateBioimpedance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedBioimpedance = yield this.bioimpedanceRepository.update(+req.params.id, req.body);
                res.json(updatedBioimpedance);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error updating bioimpedance');
            }
        });
    }
    deleteBioimpedance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.bioimpedanceRepository.delete(+req.params.id);
                res.status(204).send();
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error deleting bioimpedance');
            }
        });
    }
}
exports.BioimpedanceController = BioimpedanceController;

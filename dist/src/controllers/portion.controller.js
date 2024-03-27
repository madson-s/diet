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
exports.PortionController = void 0;
class PortionController {
    constructor(portionRepository) {
        this.portionRepository = portionRepository;
    }
    getAllPortions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const portions = yield this.portionRepository.getAll();
                res.json(portions);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching portions');
            }
        });
    }
    getPortionById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const portion = yield this.portionRepository.getById(+req.params.id);
                if (!portion) {
                    return res.status(404).send('Portion not found');
                }
                res.json(portion);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching portion');
            }
        });
    }
    createPortion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newPortion = yield this.portionRepository.create(req.body);
                res.status(201).json(newPortion);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error creating portion');
            }
        });
    }
    updatePortion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedPortion = yield this.portionRepository.update(+req.params.id, req.body);
                res.json(updatedPortion);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error updating portion');
            }
        });
    }
    deletePortion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.portionRepository.delete(+req.params.id);
                res.status(204).send();
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error deleting portion');
            }
        });
    }
}
exports.PortionController = PortionController;

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
exports.MeasureController = void 0;
class MeasureController {
    constructor(measureRepository) {
        this.measureRepository = measureRepository;
    }
    getAllMeasures(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const measures = yield this.measureRepository.getAll();
                res.json(measures);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching measures');
            }
        });
    }
    getMeasureById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const measure = yield this.measureRepository.getById(+req.params.id);
                if (!measure) {
                    return res.status(404).send('Measure not found');
                }
                res.json(measure);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching measure');
            }
        });
    }
    createMeasure(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newMeasure = yield this.measureRepository.create(req.body);
                res.status(201).json(newMeasure);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error creating measure');
            }
        });
    }
    updateMeasure(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedMeasure = yield this.measureRepository.update(+req.params.id, req.body);
                res.json(updatedMeasure);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error updating measure');
            }
        });
    }
    deleteMeasure(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.measureRepository.delete(+req.params.id);
                res.status(204).send();
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error deleting measure');
            }
        });
    }
}
exports.MeasureController = MeasureController;

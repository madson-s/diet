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
exports.LateralCircumferenceController = void 0;
class LateralCircumferenceController {
    constructor(lateralCircumferenceRepository) {
        this.lateralCircumferenceRepository = lateralCircumferenceRepository;
    }
    getAllLateralCircumferences(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lateralCircumferences = yield this.lateralCircumferenceRepository.getAll();
                res.json(lateralCircumferences);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching lateral circumferences');
            }
        });
    }
    getLateralCircumferenceById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const lateralCircumference = yield this.lateralCircumferenceRepository.getById(+req.params.id);
                if (!lateralCircumference) {
                    return res.status(404).send('Lateral circumference not found');
                }
                res.json(lateralCircumference);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching lateral circumference');
            }
        });
    }
    createLateralCircumference(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newLateralCircumference = yield this.lateralCircumferenceRepository.create(req.body);
                res.status(201).json(newLateralCircumference);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error creating lateral circumference');
            }
        });
    }
    updateLateralCircumference(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedLateralCircumference = yield this.lateralCircumferenceRepository.update(+req.params.id, req.body);
                res.json(updatedLateralCircumference);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error updating lateral circumference');
            }
        });
    }
    deleteLateralCircumference(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.lateralCircumferenceRepository.delete(+req.params.id);
                res.status(204).send();
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error deleting lateral circumference');
            }
        });
    }
}
exports.LateralCircumferenceController = LateralCircumferenceController;

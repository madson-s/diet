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
exports.CircumferenceController = void 0;
class CircumferenceController {
    constructor(circumferenceRepository) {
        this.circumferenceRepository = circumferenceRepository;
    }
    getAllCircumferences(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const circumferences = yield this.circumferenceRepository.getAll();
                res.json(circumferences);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching circumferences');
            }
        });
    }
    getCircumferenceById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const circumference = yield this.circumferenceRepository.getById(+req.params.id);
                if (!circumference) {
                    return res.status(404).send('Circumference not found');
                }
                res.json(circumference);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching circumference');
            }
        });
    }
    createCircumference(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newCircumference = yield this.circumferenceRepository.create(req.body);
                res.status(201).json(newCircumference);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error creating circumference');
            }
        });
    }
    updateCircumference(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedCircumference = yield this.circumferenceRepository.update(+req.params.id, req.body);
                res.json(updatedCircumference);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error updating circumference');
            }
        });
    }
    deleteCircumference(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.circumferenceRepository.delete(+req.params.id);
                res.status(204).send();
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error deleting circumference');
            }
        });
    }
}
exports.CircumferenceController = CircumferenceController;

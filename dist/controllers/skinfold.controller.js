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
exports.SkinFoldController = void 0;
class SkinFoldController {
    constructor(skinFoldRepository) {
        this.skinFoldRepository = skinFoldRepository;
    }
    getAllSkinFolds(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const skinFolds = yield this.skinFoldRepository.getAll();
                res.json(skinFolds);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching skin folds');
            }
        });
    }
    getSkinFoldById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const skinFold = yield this.skinFoldRepository.getById(+req.params.id);
                if (!skinFold) {
                    return res.status(404).send('Skin fold not found');
                }
                res.json(skinFold);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error fetching skin fold');
            }
        });
    }
    createSkinFold(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newSkinFold = yield this.skinFoldRepository.create(req.body);
                res.status(201).json(newSkinFold);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error creating skin fold');
            }
        });
    }
    updateSkinFold(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedSkinFold = yield this.skinFoldRepository.update(+req.params.id, req.body);
                res.json(updatedSkinFold);
            }
            catch (error) {
                console.error(error);
                res.status(400).send('Error updating skin fold');
            }
        });
    }
    deleteSkinFold(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.skinFoldRepository.delete(+req.params.id);
                res.status(204).send();
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error deleting skin fold');
            }
        });
    }
}
exports.SkinFoldController = SkinFoldController;

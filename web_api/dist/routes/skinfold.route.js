"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const skinfold_controller_factory_1 = require("../factories/controllers/skinfold_controller.factory");
const skinFoldController = (0, skinfold_controller_factory_1.makeSkinFoldController)();
exports.default = (router) => {
    router.get('/skinFolds', (req, res) => skinFoldController.getAllSkinFolds(req, res));
    router.get('/skinFolds/:id', (req, res) => skinFoldController.getSkinFoldById(req, res));
    router.post('/skinFolds', (req, res) => skinFoldController.createSkinFold(req, res));
    router.put('/skinFolds/:id', (req, res) => skinFoldController.updateSkinFold(req, res));
    router.delete('/skinFolds/:id', (req, res) => skinFoldController.deleteSkinFold(req, res));
};

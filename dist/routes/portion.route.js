"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const portion_controller_factory_1 = require("../factories/controllers/portion_controller.factory");
const portionController = (0, portion_controller_factory_1.makePortionController)();
exports.default = (router) => {
    router.get('/portions', (req, res) => portionController.getAllPortions(req, res));
    router.get('/portions/:id', (req, res) => portionController.getPortionById(req, res));
    router.post('/portions', (req, res) => portionController.createPortion(req, res));
    router.put('/portions/:id', (req, res) => portionController.updatePortion(req, res));
    router.delete('/portions/:id', (req, res) => portionController.deletePortion(req, res));
};

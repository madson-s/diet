"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const measure_controller_factory_1 = require("../factories/controllers/measure_controller.factory");
const measureController = (0, measure_controller_factory_1.makeMeasureController)();
exports.default = (router) => {
    router.get('/measures', (req, res) => measureController.getAllMeasures(req, res));
    router.get('/measures/:id', (req, res) => measureController.getMeasureById(req, res));
    router.post('/measures', (req, res) => measureController.createMeasure(req, res));
    router.put('/measures/:id', (req, res) => measureController.updateMeasure(req, res));
    router.delete('/measures/:id', (req, res) => measureController.deleteMeasure(req, res));
};

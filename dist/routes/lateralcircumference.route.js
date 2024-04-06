"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lateralcircumference_controller_factory_1 = require("../factories/controllers/lateralcircumference_controller.factory");
const lateralCircumferenceController = (0, lateralcircumference_controller_factory_1.makeLateralCircumferenceController)();
exports.default = (router) => {
    router.get('/lateralCircumferences', (req, res) => lateralCircumferenceController.getAllLateralCircumferences(req, res));
    router.get('/lateralCircumferences/:id', (req, res) => lateralCircumferenceController.getLateralCircumferenceById(req, res));
    router.post('/lateralCircumferences', (req, res) => lateralCircumferenceController.createLateralCircumference(req, res));
    router.put('/lateralCircumferences/:id', (req, res) => lateralCircumferenceController.updateLateralCircumference(req, res));
    router.delete('/lateralCircumferences/:id', (req, res) => lateralCircumferenceController.deleteLateralCircumference(req, res));
};

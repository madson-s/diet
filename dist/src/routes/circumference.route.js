"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circumference_controller_factory_1 = require("../factories/controllers/circumference_controller.factory");
const circumferenceController = (0, circumference_controller_factory_1.makeCircumferenceController)();
exports.default = (router) => {
    router.get('/circumferences', (req, res) => circumferenceController.getAllCircumferences(req, res));
    router.get('/circumferences/:id', (req, res) => circumferenceController.getCircumferenceById(req, res));
    router.post('/circumferences', (req, res) => circumferenceController.createCircumference(req, res));
    router.put('/circumferences/:id', (req, res) => circumferenceController.updateCircumference(req, res));
    router.delete('/circumferences/:id', (req, res) => circumferenceController.deleteCircumference(req, res));
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anthropometric_controller_factory_1 = require("../factories/controllers/anthropometric_controller.factory");
const anthropometricController = (0, anthropometric_controller_factory_1.makeAnthropometricController)();
exports.default = (router) => {
    router.get('/anthropometrics', (req, res) => anthropometricController.getAllAnthropometrics(req, res));
    router.get('/anthropometrics/:id', (req, res) => anthropometricController.getAnthropometricById(req, res));
    router.post('/anthropometrics', (req, res) => anthropometricController.createAnthropometric(req, res));
    router.put('/anthropometrics/:id', (req, res) => anthropometricController.updateAnthropometric(req, res));
    router.delete('/anthropometrics/:id', (req, res) => anthropometricController.deleteAnthropometric(req, res));
};

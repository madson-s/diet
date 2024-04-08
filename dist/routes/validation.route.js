"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_controller_factory_1 = require("../factories/controllers/validation_controller.factory");
const validationController = (0, validation_controller_factory_1.makeValidationController)();
exports.default = (router) => {
    router.get('/validations', (req, res) => validationController.getAllValidations(req, res));
    router.get('/validations/:id', (req, res) => validationController.getValidationById(req, res));
    router.post('/validations', (req, res) => validationController.createValidation(req, res));
    router.put('/validations/:id', (req, res) => validationController.updateValidation(req, res));
    router.delete('/validations/:id', (req, res) => validationController.deleteValidation(req, res));
};

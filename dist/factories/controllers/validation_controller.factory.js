"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeValidationController = void 0;
const validation_controller_1 = require("../../controllers/validation.controller");
const validation_repository_1 = require("../../repositories/validation.repository");
function makeValidationController() {
    const repository = new validation_repository_1.ValidationRepository();
    return new validation_controller_1.ValidationController(repository);
}
exports.makeValidationController = makeValidationController;

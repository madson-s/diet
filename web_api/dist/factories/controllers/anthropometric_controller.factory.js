"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAnthropometricController = void 0;
const anthropometric_controller_1 = require("../../controllers/anthropometric.controller");
const anthropometric_repository_1 = require("../../repositories/anthropometric.repository");
function makeAnthropometricController() {
    const repository = new anthropometric_repository_1.AnthropometricRepository();
    return new anthropometric_controller_1.AnthropometricController(repository);
}
exports.makeAnthropometricController = makeAnthropometricController;

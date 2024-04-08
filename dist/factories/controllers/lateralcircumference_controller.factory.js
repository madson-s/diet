"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLateralCircumferenceController = void 0;
const lateralcircumference_controller_1 = require("../../controllers/lateralcircumference.controller");
const lateralcircumference_repository_1 = require("../../repositories/lateralcircumference.repository");
function makeLateralCircumferenceController() {
    const repository = new lateralcircumference_repository_1.LateralCircumferenceRepository();
    return new lateralcircumference_controller_1.LateralCircumferenceController(repository);
}
exports.makeLateralCircumferenceController = makeLateralCircumferenceController;

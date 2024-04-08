"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCircumferenceController = void 0;
const circumference_controller_1 = require("../../controllers/circumference.controller");
const circumference_repository_1 = require("../../repositories/circumference.repository");
function makeCircumferenceController() {
    const repository = new circumference_repository_1.CircumferenceRepository();
    return new circumference_controller_1.CircumferenceController(repository);
}
exports.makeCircumferenceController = makeCircumferenceController;

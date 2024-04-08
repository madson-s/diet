"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePortionController = void 0;
const portion_controller_1 = require("../../controllers/portion.controller");
const portion_repository_1 = require("../../repositories/portion.repository");
function makePortionController() {
    const repository = new portion_repository_1.PortionRepository();
    return new portion_controller_1.PortionController(repository);
}
exports.makePortionController = makePortionController;

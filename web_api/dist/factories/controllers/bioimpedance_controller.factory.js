"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeBioimpedanceController = void 0;
const bioimpedance_controller_1 = require("../../controllers/bioimpedance.controller");
const bioimpedance_repository_1 = require("../../repositories/bioimpedance.repository");
function makeBioimpedanceController() {
    const repository = new bioimpedance_repository_1.BioimpedanceRepository();
    return new bioimpedance_controller_1.BioimpedanceController(repository);
}
exports.makeBioimpedanceController = makeBioimpedanceController;

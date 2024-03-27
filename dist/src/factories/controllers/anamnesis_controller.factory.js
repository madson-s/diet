"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAnamnesisController = void 0;
const anamnesis_controller_1 = require("../../controllers/anamnesis.controller");
const anamnesis_repository_1 = require("../../repositories/anamnesis.repository");
function makeAnamnesisController() {
    const repository = new anamnesis_repository_1.AnamnesisRepository();
    return new anamnesis_controller_1.AnamnesisController(repository);
}
exports.makeAnamnesisController = makeAnamnesisController;

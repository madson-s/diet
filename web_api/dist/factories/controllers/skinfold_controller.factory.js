"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSkinFoldController = void 0;
const skinfold_controller_1 = require("../../controllers/skinfold.controller");
const skinfold_repository_1 = require("../../repositories/skinfold.repository");
function makeSkinFoldController() {
    const repository = new skinfold_repository_1.SkinFoldRepository();
    return new skinfold_controller_1.SkinFoldController(repository);
}
exports.makeSkinFoldController = makeSkinFoldController;

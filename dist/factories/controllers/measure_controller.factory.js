"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeMeasureController = void 0;
const measure_controller_1 = require("../../controllers/measure.controller");
const measure_repository_1 = require("../../repositories/measure.repository");
function makeMeasureController() {
    const repository = new measure_repository_1.MeasureRepository();
    return new measure_controller_1.MeasureController(repository);
}
exports.makeMeasureController = makeMeasureController;

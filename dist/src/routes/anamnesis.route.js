"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anamnesis_controller_factory_1 = require("../factories/controllers/anamnesis_controller.factory");
const anamnesisController = (0, anamnesis_controller_factory_1.makeAnamnesisController)();
exports.default = (router) => {
    router.get('/anamnesis', (req, res) => anamnesisController.getAllAnamnesis(req, res));
    router.get('/anamnesis/:id', (req, res) => anamnesisController.getAnamnesisById(req, res));
    router.post('/anamnesis', (req, res) => anamnesisController.createAnamnesis(req, res));
    router.put('/anamnesis/:id', (req, res) => anamnesisController.updateAnamnesis(req, res));
    router.delete('/anamnesis/:id', (req, res) => anamnesisController.deleteAnamnesis(req, res));
};

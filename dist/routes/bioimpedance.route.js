"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bioimpedance_controller_factory_1 = require("../factories/controllers/bioimpedance_controller.factory");
const bioimpedanceController = (0, bioimpedance_controller_factory_1.makeBioimpedanceController)();
exports.default = (router) => {
    router.get('/bioimpedances', (req, res) => bioimpedanceController.getAllBioimpedances(req, res));
    router.get('/bioimpedances/:id', (req, res) => bioimpedanceController.getBioimpedanceById(req, res));
    router.post('/bioimpedances', (req, res) => bioimpedanceController.createBioimpedance(req, res));
    router.put('/bioimpedances/:id', (req, res) => bioimpedanceController.updateBioimpedance(req, res));
    router.delete('/bioimpedances/:id', (req, res) => bioimpedanceController.deleteBioimpedance(req, res));
};

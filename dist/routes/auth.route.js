"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_factory_1 = require("../factories/controllers/auth_controller.factory");
const cuthController = (0, auth_controller_factory_1.makeAuthtroller)();
exports.default = (router) => {
    router.post('/auth/signup', (req, res) => cuthController.signin(req, res));
    router.post('/auth/signin', (req, res) => cuthController.signup(req, res));
    router.post('/auth/refresh', (req, res) => cuthController.refresh(req, res));
};

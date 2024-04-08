"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_factory_1 = require("../factories/controllers/auth_controller.factory");
const authController = (0, auth_controller_factory_1.makeAuthtroller)();
exports.default = (router) => {
    router.post('/auth/signup', (req, res) => authController.signup(req, res));
    router.post('/auth/signin', (req, res) => authController.signin(req, res));
    router.post('/auth/refresh', (req, res) => authController.refresh(req, res));
};

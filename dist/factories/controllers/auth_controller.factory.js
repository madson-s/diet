"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAuthtroller = void 0;
const auth_controller_1 = require("../../controllers/auth.controller");
const refresh_token_repository_1 = require("../../repositories/refresh-token.repository");
const user_repository_1 = require("../../repositories/user.repository");
const hash_service_1 = require("../../services/hash.service");
const jwt_service_1 = require("../../services/jwt.service");
function makeAuthtroller() {
    const userRepository = new user_repository_1.UserRepository();
    const refreshTokenRepository = new refresh_token_repository_1.RefreshTokenRepository();
    const cryptService = new hash_service_1.CryptService();
    const tokenService = new jwt_service_1.TokenService();
    return new auth_controller_1.AuthController(userRepository, refreshTokenRepository, cryptService, tokenService);
}
exports.makeAuthtroller = makeAuthtroller;

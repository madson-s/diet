"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const refresh_token_repository_1 = require("../repositories/refresh-token.repository");
const user_repository_1 = require("../repositories/user.repository");
const hash_service_1 = require("../services/hash.service");
const uuidv4_1 = require("uuidv4");
const jwt_service_1 = require("../services/jwt.service");
function generateTokens(_a) {
    return __awaiter(this, arguments, void 0, function* ({ user }) {
        const refreshToken = (0, uuidv4_1.uuid)();
        const refreshTokenRepository = new refresh_token_repository_1.RefreshTokenRepository();
        const tokenService = new jwt_service_1.TokenService();
        yield refreshTokenRepository.create({
            createParams: {
                data: { token: refreshToken, user: { connect: { id: user.id } } },
            },
            updateParams: {
                where: { userId: user.id },
                data: { deletedAt: new Date() },
            },
        });
        const accessToken = tokenService.generate({ user });
        return { accessToken, refreshToken };
    });
}
class AuthController {
    signup(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password, name, type } = request.body;
                const userRepository = new user_repository_1.UserRepository();
                const cryptService = new hash_service_1.CryptService();
                const hashedPassword = yield cryptService.hash(password);
                if (!type || (type !== 'ADMIN' && type !== 'NUTRITIONIST')) {
                    return response.status(400).json({ error: 'Invalid or missing user type' });
                }
                yield userRepository.add({
                    email,
                    name,
                    password: hashedPassword,
                    type
                });
                return response.sendStatus(201);
            }
            catch (error) {
                console.error(error);
                return response.status(500).json({ error: 'An error occurred while registering the user' });
            }
        });
    }
    signin(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = request.body;
                const userRepository = new user_repository_1.UserRepository();
                const cryptService = new hash_service_1.CryptService();
                const tokenService = new jwt_service_1.TokenService();
                let user = yield userRepository.getByEmail(email);
                if (!user) {
                    return response.status(401).json({ error: 'Unauthorized' });
                }
                const isPasswordValid = yield cryptService.compare(password, user.password);
                if (!isPasswordValid) {
                    return response.status(401).json({ error: 'Unauthorized' });
                }
                const { accessToken, refreshToken } = yield generateTokens({
                    user: { id: user.id, email: user.email },
                });
                response.json({ id: user.id, accessToken, refreshToken });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: 'An error occurred while signing in the user' });
            }
        });
    }
    refresh(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { token } = request.body;
                const userRepository = new user_repository_1.UserRepository();
                const refreshTokenRepository = new refresh_token_repository_1.RefreshTokenRepository();
                const isTokenValid = yield refreshTokenRepository.getByToken(token);
                if (!isTokenValid) {
                    return response.status(401).json({ error: 'Unauthorized' });
                }
                const user = yield userRepository.getById(isTokenValid.id);
                if (!user) {
                    return response.status(401).json({ error: 'Unauthorized' });
                }
                const { accessToken, refreshToken } = yield generateTokens({
                    user: { id: user.id, email: user.email },
                });
                response.json({ id: user.id, accessToken, refreshToken });
            }
            catch (error) {
                console.error(error);
                response.status(500).json({ error: 'An error occurred while refreshing the token' });
            }
        });
    }
}
exports.AuthController = AuthController;

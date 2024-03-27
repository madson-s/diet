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
const user_repository_1 = require("../repositories/user.repository");
const hash_service_1 = require("../services/hash.service");
class AuthController {
    signup(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password, name, type } = request.body;
                const userRepository = new user_repository_1.UserRepository();
                const encryptService = new hash_service_1.EncryptService();
                const encryptedPassword = yield encryptService.hash(password);
                if (!type || (type !== 'ADMIN' && type !== 'NUTRITIONIST')) {
                    return response.status(400).json({ error: 'Invalid or missing user type' });
                }
                yield userRepository.add({
                    email,
                    name,
                    password: encryptedPassword,
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
}
exports.AuthController = AuthController;

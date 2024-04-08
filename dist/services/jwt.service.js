"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = process.env.TOKEN_KEY;
class TokenService {
    generate(paylaod) {
        return jsonwebtoken_1.default.sign(paylaod, secretKey, { expiresIn: '1m' });
    }
    verify(token) {
        try {
            const decoded = jsonwebtoken_1.default.verify(token, secretKey);
            return decoded;
        }
        catch (error) {
            return null;
        }
    }
}
exports.TokenService = TokenService;

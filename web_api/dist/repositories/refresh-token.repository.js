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
exports.RefreshTokenRepository = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class RefreshTokenRepository {
    getByToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.refreshToken.findUnique({
                where: { token },
            });
        });
    }
    create(_a) {
        return __awaiter(this, arguments, void 0, function* ({ createParams, updateParams }) {
            const [, refreshToken] = yield prisma.$transaction([
                prisma.refreshToken.updateMany(updateParams),
                prisma.refreshToken.create(createParams),
            ]);
            return refreshToken;
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma.refreshToken.update({
                where: { id },
                data,
            });
        });
    }
}
exports.RefreshTokenRepository = RefreshTokenRepository;

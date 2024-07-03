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
const client_1 = require("@prisma/client");
const hash_service_1 = require("../src/services/hash.service");
function createUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const cryptService = new hash_service_1.CryptService();
        const password = yield cryptService.hash('12345678');
        yield prisma.user.createMany({
            data: [{
                    email: 'admin@email.com',
                    password: password,
                    name: 'ADMIN DIET',
                    type: client_1.UserType.ADMIN,
                }, {
                    email: 'nutritionist@email.com',
                    password: password,
                    name: 'NUTRITIONIST DIET',
                    type: client_1.UserType.NUTRITIONIST,
                }],
        });
    });
}
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield createUser();
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));

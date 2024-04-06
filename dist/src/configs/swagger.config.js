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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const port = process.env.PORT || 10000;
function loadSwaggerPathsAndSchemas() {
    return __awaiter(this, void 0, void 0, function* () {
        const docsDirectory = path_1.default.join(__dirname, '..', '..', '..', 'docs');
        const files = yield fs_1.promises.readdir(docsDirectory);
        const swaggerPaths = {};
        const swaggerSchemas = {};
        for (const file of files) {
            const filePath = path_1.default.join(docsDirectory, file);
            try {
                const fileContent = yield fs_1.promises.readFile(filePath, 'utf-8');
                const jsonContent = JSON.parse(fileContent);
                if (file.endsWith('.doc.json')) {
                    Object.assign(swaggerPaths, jsonContent);
                }
                else if (file.endsWith('.schema.json')) {
                    Object.assign(swaggerSchemas, jsonContent);
                }
            }
            catch (error) {
                console.error(`Error loading documentation file ${file}:`, error);
            }
        }
        return [swaggerSchemas, swaggerPaths];
    });
}
function setupSwagger(app) {
    return __awaiter(this, void 0, void 0, function* () {
        const [swaggerSchemas, swaggerPaths] = yield loadSwaggerPathsAndSchemas();
        const swaggerDefinition = {
            openapi: '3.0.0',
            info: {
                title: 'DIET API',
                version: '1.0.0',
                description: 'LADOC - DIET API Description',
            },
            servers: [
                { url: `https://diet-yzoq.onrender.com` },
            ],
            paths: swaggerPaths,
            components: {
                schemas: swaggerSchemas,
            },
        };
        const swaggerSpec = (0, swagger_jsdoc_1.default)({
            definition: swaggerDefinition,
            apis: [],
        });
        app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    });
}
exports.setupSwagger = setupSwagger;

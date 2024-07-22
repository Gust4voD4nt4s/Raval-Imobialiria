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
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const validate_env_1 = __importDefault(require("./utils/validate-env"));
const data_source_1 = __importDefault(require("./utils/data-source"));
const immobile_route_1 = __importDefault(require("./routes/immobile.route"));
const photos_route_1 = __importDefault(require("./routes/photos.route"));
data_source_1.default.initialize()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    (0, validate_env_1.default)();
    const app = (0, express_1.default)();
    app.use(express_1.default.json({ limit: '10kb' }));
    app.use('/api/v1/immobile', immobile_route_1.default);
    app.use('/api/v1', photos_route_1.default);
    const port = config_1.default.get('port');
    app.listen(port);
    console.log(`Server Started on port: ${port}`);
})).catch((error) => console.log(error));
//# sourceMappingURL=app.js.map
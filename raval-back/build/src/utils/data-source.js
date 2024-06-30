"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
require("reflect-metadata");
const config_1 = __importDefault(require("config"));
const typeorm_1 = require("typeorm");
const postgresConfig = config_1.default.get('postgreConfig');
const postgresDataSource = new typeorm_1.DataSource(Object.assign(Object.assign({}, postgresConfig), { type: 'postgres', synchronize: false, logging: false, entities: ['src/entity/**/*.entity{.ts,.js}'], migrations: ['src/migrations/**/*{.ts,.js}'] }));
exports.default = postgresDataSource;
//# sourceMappingURL=data-source.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
require("reflect-metadata");
const config_1 = __importDefault(require("config"));
const typeorm_1 = require("typeorm");
const _1722879000211_added_entity_1 = require("../migrations/1722879000211-added-entity");
const postgresConfig = config_1.default.get('postgreConfig');
const postgresDataSource = new typeorm_1.DataSource(Object.assign(Object.assign({}, postgresConfig), { type: 'postgres', synchronize: false, logging: false, entities: ['src/entitys/**/*.entity{.ts,.js}'], migrations: [_1722879000211_added_entity_1.AddedEntity1722879000211] }));
exports.default = postgresDataSource;
//# sourceMappingURL=data-source.js.map
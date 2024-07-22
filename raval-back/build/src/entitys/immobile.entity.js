"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Immobile = exports.RoleEnumTypeOfPurchase = exports.RoleEnumTypeOfProperty = void 0;
const typeorm_1 = require("typeorm");
const model_entity_1 = __importDefault(require("./model.entity"));
const images_entity_1 = __importDefault(require("./images.entity"));
var RoleEnumTypeOfProperty;
(function (RoleEnumTypeOfProperty) {
    RoleEnumTypeOfProperty["HOME"] = "casa";
    RoleEnumTypeOfProperty["APARTMENT"] = "apartamento";
    RoleEnumTypeOfProperty["CONDOMINIUM"] = "condominium";
    RoleEnumTypeOfProperty["GROUND"] = "terreno";
})(RoleEnumTypeOfProperty || (exports.RoleEnumTypeOfProperty = RoleEnumTypeOfProperty = {}));
var RoleEnumTypeOfPurchase;
(function (RoleEnumTypeOfPurchase) {
    RoleEnumTypeOfPurchase["SALE"] = "venda";
    RoleEnumTypeOfPurchase["RENT"] = "aluguel";
})(RoleEnumTypeOfPurchase || (exports.RoleEnumTypeOfPurchase = RoleEnumTypeOfPurchase = {}));
let Immobile = class Immobile extends model_entity_1.default {
};
exports.Immobile = Immobile;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Immobile.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: RoleEnumTypeOfProperty,
    }),
    __metadata("design:type", String)
], Immobile.prototype, "type_imomobile", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: RoleEnumTypeOfPurchase,
    }),
    __metadata("design:type", String)
], Immobile.prototype, "type_purchase", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 50
    }),
    __metadata("design:type", String)
], Immobile.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 2,
    }),
    __metadata("design:type", String)
], Immobile.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'float'
    }),
    __metadata("design:type", Number)
], Immobile.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 255
    }),
    __metadata("design:type", String)
], Immobile.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
        nullable: true
    }),
    __metadata("design:type", String)
], Immobile.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'float'
    }),
    __metadata("design:type", Number)
], Immobile.prototype, "square_meters", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        nullable: true,
        default: null
    }),
    __metadata("design:type", Number)
], Immobile.prototype, "bedrooms_quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        nullable: true,
        default: null
    }),
    __metadata("design:type", Number)
], Immobile.prototype, "toilet_quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        nullable: true,
        default: null
    }),
    __metadata("design:type", Number)
], Immobile.prototype, "garage_quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'boolean',
        default: false,
    }),
    __metadata("design:type", Boolean)
], Immobile.prototype, "recreation_area", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        nullable: true,
        default: null
    }),
    __metadata("design:type", Number)
], Immobile.prototype, "pool_size", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'boolean',
        default: false,
    }),
    __metadata("design:type", Boolean)
], Immobile.prototype, "academy", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'boolean',
        default: false,
    }),
    __metadata("design:type", Boolean)
], Immobile.prototype, "plant", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => images_entity_1.default, (image) => image.immobile),
    __metadata("design:type", Array)
], Immobile.prototype, "images", void 0);
exports.Immobile = Immobile = __decorate([
    (0, typeorm_1.Entity)('immobile')
], Immobile);
//# sourceMappingURL=immobile.entity.js.map
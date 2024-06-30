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
exports.AddedEntity1719779183684 = void 0;
class AddedEntity1719779183684 {
    constructor() {
        this.name = 'AddedEntity1719779183684';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TYPE "public"."immobile_type_imomobile_enum" AS ENUM('casa', 'apartamento', 'condominium', 'terreno')`);
            yield queryRunner.query(`CREATE TYPE "public"."immobile_type_purchase_enum" AS ENUM('casa', 'apartamento', 'condominium', 'terreno')`);
            yield queryRunner.query(`CREATE TABLE "immobile" ("id" SERIAL NOT NULL, "type_imomobile" "public"."immobile_type_imomobile_enum" NOT NULL, "type_purchase" "public"."immobile_type_purchase_enum" NOT NULL, "city" character varying(50) NOT NULL, "state" character varying(2) NOT NULL, "value" integer NOT NULL, "address" character varying(255) NOT NULL, "description" text, "square_meters" integer NOT NULL, "bedrooms_quantity" integer NOT NULL, "toilet_quantity" integer NOT NULL, "garage_quantity" integer, "recreation_area" boolean DEFAULT false, "pool_size" integer, "academy" boolean DEFAULT false, "plant" boolean DEFAULT false, CONSTRAINT "PK_aca568da57c4d273cf2dd803244" PRIMARY KEY ("id"))`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE "immobile"`);
            yield queryRunner.query(`DROP TYPE "public"."immobile_type_purchase_enum"`);
            yield queryRunner.query(`DROP TYPE "public"."immobile_type_imomobile_enum"`);
        });
    }
}
exports.AddedEntity1719779183684 = AddedEntity1719779183684;
//# sourceMappingURL=1719779183684-added-entity.js.map
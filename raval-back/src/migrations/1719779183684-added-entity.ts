import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedEntity1719779183684 implements MigrationInterface {
    name = 'AddedEntity1719779183684'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."immobile_type_imomobile_enum" AS ENUM('casa', 'apartamento', 'condominium', 'terreno')`);
        await queryRunner.query(`CREATE TYPE "public"."immobile_type_purchase_enum" AS ENUM('casa', 'apartamento', 'condominium', 'terreno')`);
        await queryRunner.query(`CREATE TABLE "immobile" ("id" SERIAL NOT NULL, "type_imomobile" "public"."immobile_type_imomobile_enum" NOT NULL, "type_purchase" "public"."immobile_type_purchase_enum" NOT NULL, "city" character varying(50) NOT NULL, "state" character varying(2) NOT NULL, "value" integer NOT NULL, "address" character varying(255) NOT NULL, "description" text, "square_meters" integer NOT NULL, "bedrooms_quantity" integer NOT NULL, "toilet_quantity" integer NOT NULL, "garage_quantity" integer, "recreation_area" boolean DEFAULT false, "pool_size" integer, "academy" boolean DEFAULT false, "plant" boolean DEFAULT false, CONSTRAINT "PK_aca568da57c4d273cf2dd803244" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "immobile"`);
        await queryRunner.query(`DROP TYPE "public"."immobile_type_purchase_enum"`);
        await queryRunner.query(`DROP TYPE "public"."immobile_type_imomobile_enum"`);
    }

}

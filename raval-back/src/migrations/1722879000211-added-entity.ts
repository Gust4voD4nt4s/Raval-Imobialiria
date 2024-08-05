import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedEntity1722879000211 implements MigrationInterface {
    name = 'AddedEntity1722879000211'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "images" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "originalname" character varying NOT NULL, "filename" character varying NOT NULL, "property_id" integer, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."property_type_property_enum" AS ENUM('casa', 'apartamento', 'condominium', 'terreno')`);
        await queryRunner.query(`CREATE TYPE "public"."property_type_purchase_enum" AS ENUM('venda', 'aluguel')`);
        await queryRunner.query(`CREATE TABLE "property" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "type_property" "public"."property_type_property_enum" NOT NULL, "type_purchase" "public"."property_type_purchase_enum" NOT NULL, "city" character varying(50) NOT NULL, "state" character varying(2) NOT NULL, "value" double precision NOT NULL, "address" character varying(255) NOT NULL, "description" text, "square_meters" double precision NOT NULL, "bedrooms_quantity" integer, "toilet_quantity" integer, "garage_quantity" integer, "recreation_area" boolean NOT NULL DEFAULT false, "pool_size" integer, "academy" boolean NOT NULL DEFAULT false, "plant" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_d80743e6191258a5003d5843b4f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_b2ec2b62f2ac09a63d3424705f0" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_b2ec2b62f2ac09a63d3424705f0"`);
        await queryRunner.query(`DROP TABLE "property"`);
        await queryRunner.query(`DROP TYPE "public"."property_type_purchase_enum"`);
        await queryRunner.query(`DROP TYPE "public"."property_type_property_enum"`);
        await queryRunner.query(`DROP TABLE "images"`);
    }

}

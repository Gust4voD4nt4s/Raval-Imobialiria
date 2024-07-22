import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedEntity1720996769227 implements MigrationInterface {
    name = 'AddedEntity1720996769227'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "images" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "originalname" character varying NOT NULL, "filename" character varying NOT NULL, "immobileId" integer, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."immobile_type_imomobile_enum" AS ENUM('casa', 'apartamento', 'condominium', 'terreno')`);
        await queryRunner.query(`CREATE TYPE "public"."immobile_type_purchase_enum" AS ENUM('venda', 'aluguel')`);
        await queryRunner.query(`CREATE TABLE "immobile" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "type_imomobile" "public"."immobile_type_imomobile_enum" NOT NULL, "type_purchase" "public"."immobile_type_purchase_enum" NOT NULL, "city" character varying(50) NOT NULL, "state" character varying(2) NOT NULL, "value" double precision NOT NULL, "address" character varying(255) NOT NULL, "description" text, "square_meters" double precision NOT NULL, "bedrooms_quantity" integer, "toilet_quantity" integer, "garage_quantity" integer, "recreation_area" boolean NOT NULL DEFAULT false, "pool_size" integer, "academy" boolean NOT NULL DEFAULT false, "plant" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_aca568da57c4d273cf2dd803244" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_e0acb64b4ed3c0be73d0001ae79" FOREIGN KEY ("immobileId") REFERENCES "immobile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_e0acb64b4ed3c0be73d0001ae79"`);
        await queryRunner.query(`DROP TABLE "immobile"`);
        await queryRunner.query(`DROP TYPE "public"."immobile_type_purchase_enum"`);
        await queryRunner.query(`DROP TYPE "public"."immobile_type_imomobile_enum"`);
        await queryRunner.query(`DROP TABLE "images"`);
    }

}

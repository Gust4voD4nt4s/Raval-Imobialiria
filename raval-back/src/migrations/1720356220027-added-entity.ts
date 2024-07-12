import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedEntity1720356220027 implements MigrationInterface {
    name = 'AddedEntity1720356220027'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "immobile" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "type_imomobile" "public"."immobile_type_imomobile_enum" NOT NULL, "type_purchase" "public"."immobile_type_purchase_enum" NOT NULL, "city" character varying(50) NOT NULL, "state" character varying(2) NOT NULL, "value" double precision NOT NULL, "address" character varying(255) NOT NULL, "description" text, "square_meters" double precision NOT NULL, "bedrooms_quantity" integer, "toilet_quantity" integer, "garage_quantity" integer, "recreation_area" boolean NOT NULL DEFAULT false, "pool_size" integer, "academy" boolean NOT NULL DEFAULT false, "plant" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_aca568da57c4d273cf2dd803244" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "immobile"`);
    }

}

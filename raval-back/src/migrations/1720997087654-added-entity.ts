import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedEntity1720997087654 implements MigrationInterface {
    name = 'AddedEntity1720997087654'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_e0acb64b4ed3c0be73d0001ae79"`);
        await queryRunner.query(`ALTER TABLE "images" RENAME COLUMN "immobileId" TO "immobile_id"`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_eeec5881ca910b906a243a5f290" FOREIGN KEY ("immobile_id") REFERENCES "immobile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_eeec5881ca910b906a243a5f290"`);
        await queryRunner.query(`ALTER TABLE "images" RENAME COLUMN "immobile_id" TO "immobileId"`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_e0acb64b4ed3c0be73d0001ae79" FOREIGN KEY ("immobileId") REFERENCES "immobile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}

import { AfterLoad, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "./model.entity";
import { Property } from "./property.entity";
import config from '../../config/default'

@Entity('images')
export default abstract class Images extends Model {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: String,
        nullable: false
    })
    originalname: string;

    @Column({
        type: String,
        nullable: false
    })
    filename: string;

    url: string

    @AfterLoad()
    getImages() {
        this.url = `${config.baseUrl}/images/${this.filename}`
    }

    @ManyToOne(() => Property, property => property.images)
    @JoinColumn({ name: "property_id" })
    property: Property;

}


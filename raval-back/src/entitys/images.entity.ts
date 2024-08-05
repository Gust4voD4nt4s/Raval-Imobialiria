import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "./model.entity";
import { Property } from "./property.entity";


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

    @ManyToOne(() => Property, property => property.images)
    @JoinColumn({ name: "property_id" }) 
    property: Property;
    
}


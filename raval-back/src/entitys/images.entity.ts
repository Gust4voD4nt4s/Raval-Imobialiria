import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Model from "./model.entity";
import { Immobile } from "./immobile.entity";


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

    @ManyToOne(() => Immobile, immobile => immobile.images)
    @JoinColumn({ name: "immobile_id" }) 
    immobile: Immobile;
    
}


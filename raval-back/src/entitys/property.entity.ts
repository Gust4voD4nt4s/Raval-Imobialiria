import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Model from './model.entity'
import Images from './images.entity';

export enum RoleEnumTypeOfProperty {
    HOME = 'Casa',
    APARTMENT = 'Apartamento',
    CONDOMINIUM = 'Condominium',
    GROUND = 'Terreno'
}

export enum RoleEnumTypeOfPurchase {
    SALE = 'Venda',
    RENT = 'Aluguel'
}

@Entity('property')
export class Property extends Model {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: RoleEnumTypeOfProperty,
    })
    type_property: RoleEnumTypeOfProperty;

    @Column({
        type: 'enum',
        enum: RoleEnumTypeOfPurchase,
    })
    type_purchase: RoleEnumTypeOfPurchase;

    @Column({
        type: 'varchar',
        length: 50
    })
    city: string;

    @Column({
        type: 'varchar',
        length: 2,
    })
    state: string;

    @Column({
        type: 'float'
    })
    value: number;

    @Column({
        type: 'varchar',
        length: 255
    })
    address: string;

    @Column({
        type: 'text',
        nullable: true
    })
    description?: string;

    @Column({
        type: 'float'
    })
    square_meters: number;

    @Column({
        type: 'int',
        nullable: true,
        default: null
    })
    bedrooms_quantity?: number;

    @Column({
        type: 'int',
        nullable: true,
        default: null
    })
    toilet_quantity?: number

    @Column({
        type: 'int',
        nullable: true,
        default: null
    })
    garage_quantity?: number;

    @Column({
        type: 'boolean',
        default: false,
    })
    recreation_area?: boolean;

    @Column({
        type: 'int',
        nullable: true,
        default: null
    })
    pool_size?: number;

    @Column({
        type: 'boolean',
        default: false,
    })
    academy?: boolean;

    @Column({
        type: 'boolean',
        default: false,
    })
    plant?: boolean;
    
    @OneToMany(() => Images, (image) => image.property)
    images: Images[]
}
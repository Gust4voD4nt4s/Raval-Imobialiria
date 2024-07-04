import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum RoleEnumTypeOfProperty {
    HOME = 'casa',
    APARTMENT = 'apartamento',
    CONDOMINIUM = 'condominium',
    GROUND = 'terreno'
}

export enum RoleEnumTypeOfPurchase {
    SALE = 'venda',
    RENT = 'aluguel',
}

@Entity('immobile')
export class Immobile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: RoleEnumTypeOfProperty,
        default: RoleEnumTypeOfProperty.HOME
    })
    type_imomobile: RoleEnumTypeOfProperty;

    @Column({
        type: 'enum',
        enum: RoleEnumTypeOfProperty,
        default: RoleEnumTypeOfPurchase.SALE
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
        type: 'int'
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
        type: 'int'
    })
    square_meters: number;

    @Column({
        type: 'int',
        nullable: true
    })
    bedrooms_quantity: number;

    @Column({
        type: 'int',
        nullable: true
    })
    toilet_quantity: number

    @Column({
        type: 'int',
        nullable: true
    })
    garage_quantity?: number;

    @Column({
        type: 'boolean',
        default: false,
        nullable: true
    })
    recreation_area?: boolean;

    @Column({
        type: 'int',
        nullable: true
    })
    pool_size?: number;

    @Column({
        type: 'boolean',
        default: false,
        nullable: true
    })
    academy?: boolean;

    @Column({
        type: 'boolean',
        default: false,
        nullable: true
    })
    plant?: boolean;
    
}
import { number, object, string, z } from 'zod'

import {RoleEnumTypeOfProperty, RoleEnumTypeOfPurchase} from '../entitys/immobile.entity'

export const createImmobile = object({
    body: object({
        type_imomobile: z.nativeEnum(RoleEnumTypeOfProperty),

        type_purchase: z.nativeEnum(RoleEnumTypeOfPurchase),

        city: string({
            required_error: 'Cidade é obrigatorio'
        }).max(50, 'Cidade deve ter no maximo 50 caracters'),

        state: string({
            required_error: 'Estado é obrigatorio'
        }).min(2, 'Minimo de 2 caracters'),

        value: number({
            required_error: 'Valor é obrigatorio'
        }),

        adrress: string({
            required_error: 'Endereço é obrigatorio'
        }).max(255, 'Endereço deve ter no maximo 255 caracters'),

        square_meters: number({
            required_error: 'Area quadrado é obrigatorio'
        }),

    })
})


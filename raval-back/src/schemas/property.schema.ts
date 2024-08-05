import { TypeOf, array, boolean, number, object, string, z } from 'zod'

import { RoleEnumTypeOfProperty, RoleEnumTypeOfPurchase } from '../entitys/property.entity'

const imageSchema = object({
    originalname: string({
        required_error: 'Nome original da imagem é obrigatório'
    }),
    filename: string({
        required_error: 'Nome do arquivo da imagem é obrigatório'
    })
});

export const createPropertySchema = object({
    body: object({          
        type_imomobile: z.nativeEnum(RoleEnumTypeOfProperty),

        type_purchase: z.nativeEnum(RoleEnumTypeOfPurchase),

        city: string({
            required_error: "Cidade é obrigatorio"
        }).max(50, 'Cidade deve ter no maximo 50 caracters'),

        state: string({
            required_error: 'Estado é obrigatorio'
        }).min(2, 'Minimo de 2 caracters'),

        value: number({
            required_error: 'Valor é obrigatorio'
        }),

        address: string({
            required_error: 'Endereço é obrigatorio'
        }).max(255, 'Endereço deve ter no maximo 255 caracters'),

        square_meters: number({
            required_error: 'Area quadrado é obrigatorio'
        }),

        description: string().optional(),
        bedrooms_quantity: number().optional(),
        toilet_quantity: number().optional(),
        garage_quantity: number().optional(),
        recreation_area: boolean().optional(),
        pool_size: number().optional(),
        academy: boolean().optional(),
        plant: boolean().optional(),

        images: array(imageSchema).optional()
    })
})

export type CreatePropertyInput = TypeOf<typeof createPropertySchema>['body'];

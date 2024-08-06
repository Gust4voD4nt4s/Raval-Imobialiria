import { NextFunction, Request, Response } from 'express'
import { createProperty, findPropertys } from '../services/property.service'
import { CreatePropertyInput, createPropertySchema } from '../schemas/property.schema';
import { Between, In, MoreThanOrEqual } from 'typeorm';

export const registerProperty = async (req: Request<object, object, CreatePropertyInput>, res: Response, next: NextFunction) => {
    try {
        const newProperty = createPropertySchema.parse({ body: req.body })
        await createProperty(newProperty.body)
        res.status(201).json({ message: 'Imovel criado com sucesso' });
        next()
    } catch (error) {
        if (error instanceof ZodError) {
            const messages = error.issues.map(issue => issue.message);
            return res.status(400).json({
                message: 'Erro ao criar imóvel',
                errors: messages
            });
        } else {
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
}

export const getProperty = async (req: Request, res: Response) => {
    try {
        const data = req.query

        let multiFilter: object = { ...data }

        for (const value in data) {
            if (typeof data[value] === typeof {}) {

                multiFilter = {
                    ...multiFilter,
                    [value]: In(data[value])
                }
            }

            if (value == 'square_meters') {
                multiFilter = {
                    ...multiFilter,
                    [value]: MoreThanOrEqual(data[value])
                }
            }

            if (value == 'min_value' || value == 'max_value') {

                multiFilter = {
                    ...multiFilter,
                    value: Between(data.min_value, data.max_value)
                }

                delete multiFilter.min_value
                delete multiFilter.max_value
            }

        }

        const propertys = await findPropertys({
            relations: {
                images: true
            },
            where: {
                ...multiFilter
            }

        })
        
        res.status(200).json(propertys)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error })
    }
}
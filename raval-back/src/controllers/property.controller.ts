import { NextFunction, Request, Response } from 'express'
import { createProperty, findPropertys } from '../services/property.service'
import { CreatePropertyInput, createPropertySchema } from '../schemas/property.schema';
import { Between, In, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';
import { ZodError } from 'zod';

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
        const data = req.query as Record<string, unknown>;

        const multiFilter: Record<string, unknown> = { ...data };

        for (const value in data) {
            if (Array.isArray(data[value])) {
                multiFilter[value] = In(data[value]);
            } else if (value === 'square_meters' && data[value]) {
                multiFilter[value] = MoreThanOrEqual(data[value]);
            } else if (value === 'min_value' || value === 'max_value') {
                const minValue = data.min_value;
                const maxValue = data.max_value;

                if (minValue && maxValue) {
                    multiFilter['value'] = Between(minValue, maxValue);
                } else if (minValue && !maxValue) {
                    multiFilter['value'] = MoreThanOrEqual(minValue);
                } else if (maxValue && !minValue) {
                    multiFilter['value'] = LessThanOrEqual(maxValue);
                }

                delete multiFilter.min_value;
                delete multiFilter.max_value;
            }
        }

        const propertys = await findPropertys({
            relations: {
                images: true
            },
            where: {
                ...multiFilter
            }
        });

        res.status(200).json(propertys);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: error });
    }
};
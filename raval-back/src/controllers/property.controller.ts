import { NextFunction, Request, Response } from 'express'
import { createProperty, findPropertys } from '../services/property.service'
import { CreatePropertyInput, createPropertySchema } from '../schemas/property.schema';
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
        const data = req.query
        const propertys = await findPropertys({
            relations: {
                images: true
            },
            where: {
                ...data
            }
        })
        res.status(200).json(propertys)
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error})
    }
}
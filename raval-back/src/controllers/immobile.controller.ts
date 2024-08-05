import { NextFunction, Request, Response } from 'express'
import { createImmobile, findImmobiles } from '../services/immobile.service'
import { CreateImmobileInput, createImmobileSchema } from '../schemas/immobile.schema';
import { ZodError } from 'zod';

export const registerImmobile = async (req: Request<object, object, CreateImmobileInput>, res: Response, next: NextFunction) => {
    try {
        const newImmobile = createImmobileSchema.parse({ body: req.body })
        await createImmobile(newImmobile.body)
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

export const getImmobile = async (req: Request, res: Response) => {
    try {
        const data = req.query
        const immobiles = await findImmobiles({
            relations: {
                images: true
            },
            where: {
                ...data
            }
        })
        res.status(200).json(immobiles)
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error})
    }
}
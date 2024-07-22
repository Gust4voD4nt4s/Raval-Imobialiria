import { NextFunction, Request, Response } from 'express'
import { createImmobile } from '../services/immobile.service'
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

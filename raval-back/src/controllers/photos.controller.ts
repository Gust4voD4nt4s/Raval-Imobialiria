import { Request, Response } from "express"

export const photosImmobile = async (req: Request, res: Response) => {
    res.status(201).json(req.files)
}

export const photoUser = async (req: Request, res: Response) => {
    res.status(201).json(req.file)
}
import { Request, Response } from "express";
import { upload } from "../middlewares/multer.middlewares";
import { createImages, IImages } from "../services/images.service";



export const photosImmobile = (req: Request, res: Response) => {
    const up = upload.array('files');
    up(req, res, async (error) => {
        if (error) return res.status(400).json({ errors: error.field });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const images: any = req.files
        const immobileId = req.body.immobile_id

        try {
            const newImages: IImages[] = []

            for (const image of images) {
                const data: IImages = {
                    originalname: image.originalname,
                    filename: image.filename,
                    immobile_id: immobileId
                }

                newImages.push(data)
            }

            await createImages(newImages)
            res.status(201).json(newImages)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error.message });
        }

    });
};

export const photoUser = async (req: Request, res: Response) => {
    const up = upload.single('file');
    up(req, res, (error) => {
        if (error) return res.status(400).json({ errors: error.field });
        return res.status(201).json(req.files);
    });
};

import { Repository } from "typeorm";
import Images from "../entitys/images.entity";
import { Immobile } from "../entitys/immobile.entity";
import postgresDataSource from '../utils/data-source'

export interface IImages {
    filename: string;
    originalname: string;
    immobile_id: number;
}

const imagesRepository: Repository<Images> = postgresDataSource.getRepository(Images);
const immobileRepository: Repository<Immobile> = postgresDataSource.getRepository(Immobile);

export const createImages = async (images: IImages[]) => {
    const newImages = [];

    for (const imageData of images) {
        const immobile = await immobileRepository.findOne({ where: { id: imageData.immobile_id } });
        if (!immobile) {
            throw new Error(`Immobile with id ${imageData.immobile_id} not found`);
        }

        const newImage = imagesRepository.create({
            ...imageData,
            immobile: immobile
        });
        newImages.push(newImage);
    }

    return await imagesRepository.save(newImages);
};
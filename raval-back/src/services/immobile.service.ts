import { Repository } from "typeorm";
import { Immobile } from "../entitys/immobile.entity";
import { CreateImmobileInput } from "../schemas/immobile.schema";
import postgresDataSource from '../utils/data-source'

const immobileRepository: Repository<Immobile> = postgresDataSource.getRepository(Immobile);

export const createImmobile = async (immobile: CreateImmobileInput): Promise<Immobile> => {
    const newImmobile = immobileRepository.create(immobile)
    return await immobileRepository.save(newImmobile)
};

export const findImmobiles = async (query: object) => {
    return immobileRepository.find(query)
}


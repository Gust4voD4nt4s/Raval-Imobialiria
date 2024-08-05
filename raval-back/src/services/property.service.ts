import { Repository } from "typeorm";
import { Property } from "../entitys/property.entity";
import { CreatePropertyInput } from "../schemas/property.schema";
import postgresDataSource from '../utils/data-source'

const propertyRepository: Repository<Property> = postgresDataSource.getRepository(Property);

export const createProperty = async (property: CreatePropertyInput): Promise<Property> => {
    const newProperty = propertyRepository.create(property)
    return await propertyRepository.save(newProperty)
};

export const findPropertys = async (query: object) => {
    return propertyRepository.find(query)
}
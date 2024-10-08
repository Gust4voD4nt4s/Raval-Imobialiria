import { Repository } from "typeorm";
import { Property } from "../entitys/property.entity";
import { CreatePropertyInput } from "../schemas/property.schema";
import postgresDataSource from '../utils/data-source'
import { Between, In, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';

const propertyRepository: Repository<Property> = postgresDataSource.getRepository(Property);

export const createProperty = async (property: CreatePropertyInput): Promise<Property> => {
    const newProperty = propertyRepository.create(property)
    return await propertyRepository.save(newProperty)
};

export const findPropertysWithFilter = async (filters: Record<string, unknown>, page: number, limit: number) => {

    const multiFilter: Record<string, unknown> = { ...filters };

    for (const value in filters) {
        if (Array.isArray(filters[value])) {
            multiFilter[value] = In(filters[value]);
        } else if (value === 'square_meters' && filters[value]) {
            multiFilter[value] = MoreThanOrEqual(filters[value]);
        } else if (value === 'min_value' || value === 'max_value') {
            const minValue = filters.min_value;
            const maxValue = filters.max_value;

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

    const [propertys, total] = await propertyRepository.findAndCount({
        relations: {
            images: true
        },
        where: {
            ...multiFilter
        },
        order: {
            created_at: "ASC"
        },
        take: limit,
        skip: (page - 1) * 10
    })

    return {propertys, total}
}
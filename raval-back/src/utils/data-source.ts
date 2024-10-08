require('dotenv').config();
import "reflect-metadata"
import config from 'config'
import { DataSource } from 'typeorm';
import { Property } from "../entitys/property.entity";
import Images from "../entitys/images.entity";
import { AddedEntity1728336439106 } from "../migrations/1728336439106-added-entity";


const postgresConfig = config.get<{
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
}>('postgreConfig');

const postgresDataSource = new DataSource({
    ...postgresConfig,
    type: 'postgres',
    synchronize: false,
    logging: false,
    entities: [Property, Images],
    migrations: [AddedEntity1728336439106]
})

export default postgresDataSource


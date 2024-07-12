require('dotenv').config();
import "reflect-metadata"
import config from 'config'
import { DataSource } from 'typeorm';


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
    entities: ['src/entitys/**/*.entity{.ts,.js}'],
    migrations: ['src/migrations/**/*{.ts,.js}']
})

export default postgresDataSource


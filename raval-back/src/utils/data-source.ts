require('dotenv').config();
import "reflect-metadata"
import config from 'config'
import { Immobile } from '../entitys/immobile.entity'
import { DataSource} from 'typeorm';


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
    entities: ['src/entity/**/*.entity{.ts,.js}'],
    migrations: ['src/migrations/**/*{.ts,.js}']
})

export default postgresDataSource


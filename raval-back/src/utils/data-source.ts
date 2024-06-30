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
    entities: [Immobile],
    migrations: []
})

export default postgresDataSource
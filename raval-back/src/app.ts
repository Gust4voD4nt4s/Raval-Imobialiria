require('dotenv').config();
const cors = require('cors')
import express from 'express';
import config from 'config';
import { resolve } from 'path'
import validateEnv from './utils/validate-env';
import postgresDataSource from './utils/data-source';
import propertyRouter from './routes/property.route';
import photosRouter from './routes/photos.route'


postgresDataSource.initialize()
    .then(async () => {
        validateEnv();

        const app = express()

        app.use(express.json({ limit: '10kb' }));
        app.use(express.static(resolve(__dirname, 'uploads')))

        app.use(cors({
            origin: config.get<string>('origin')
        }))

        app.use('/api/v1/property', propertyRouter)
        app.use('/api/v1', photosRouter)

        const port = config.get<number>('port');

        app.listen(port);

        console.log(`Server Started on port: ${port}`)
    }).catch((error) => console.log(error))
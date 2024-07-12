require('dotenv').config();

import express from 'express';
import config from 'config';
import validateEnv from './utils/validate-env';
import postgresDataSource from './utils/data-source';
import immobileRouter from './routes/immobile.route';
import photosRouter from './routes/photos.route'

postgresDataSource.initialize()
    .then(async () => {
        validateEnv();

        const app = express()

        app.use(express.json({ limit: '10kb' }));

        app.use('/api/v1/immobile', immobileRouter)
        app.use('/api/v1', photosRouter)

        const port = config.get<number>('port');

        app.listen(port);

        console.log(`Server Started on port: ${port}`)
    }).catch((error) => console.log(error))
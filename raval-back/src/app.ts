require('dotenv').config();

import express, { NextFunction, Request, Response } from 'express';
import config from 'config';
import validateEnv from './utils/validate-env';
import postgresDataSource from './utils/data-source';

postgresDataSource.initialize()
    .then(async () => {
        validateEnv();

        const app = express()

        app.use(express.json({ limit: '10kb' }));

        const port = config.get<number>('port');

        app.listen(port);

        console.log(`Server Started on port: ${port}`)
    }).catch((error) => console.log(error))
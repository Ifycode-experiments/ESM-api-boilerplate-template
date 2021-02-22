import express from 'express';
import bodyParser from 'body-parser';

import mongooseModuleExport from './db'; //eslint-disable-line no-unused-vars
import { router as expressRouter } from './api/controllers/userController';

const app = express();
app.use(bodyParser.json());

const users = '/users';

app.use(`${users}`, expressRouter);

export const app;

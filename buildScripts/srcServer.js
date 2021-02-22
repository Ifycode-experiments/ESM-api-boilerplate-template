import express from 'express';
import open from 'open';
import bodyParser from 'body-parser';

import mongooseModuleExport from './db'; //eslint-disable-line no-unused-vars
import { router as expressRouter } from './api/controllers/userController';

/* eslint-disable no-console */

const port = 3000;
const app = express();
app.use(bodyParser.json());

const users = '/users';

app.listen(port, () => {
  try {
    open(`http://localhost:${port}${users}`);
  }catch(err) {
    console.log(err);
  }
});

app.use(`${users}`, expressRouter);

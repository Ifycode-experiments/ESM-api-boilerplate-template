import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { router as expressRouter } from './api/controllers/userController';
import mongooseModuleExport from './db'; //eslint-disable-line no-unused-vars

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use('/users', expressRouter);

app.use(( req, res, next) => {
  res.status(200).json({
    message: 'App works!'
  });
});

export { app };

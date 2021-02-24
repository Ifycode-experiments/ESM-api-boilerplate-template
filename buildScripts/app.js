import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { router as appController } from './api/controllers/appController';
import { router as userController } from './api/controllers/userController';
import mongooseModuleExport from './db'; //eslint-disable-line no-unused-vars

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use('/', appController);
app.use('/users', userController);

/*
app.use((req, res, next) => {
  res.status(200).json({
    message: 'App works!'
  });
});
*/

app.use((req, res, next) => {
  const error = new Error('Route not found!');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

export { app };

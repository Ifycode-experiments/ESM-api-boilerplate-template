import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import { router as appController } from './api/controllers/appController';
import { router as starterController } from './api/controllers/starterController';

//===== Installed mongoDB's db =======
import mongooseModuleExport from './db'; //eslint-disable-line no-unused-vars

//===== MongoDB ATLAS db =======
//import mongooseModuleExportAtlas from './atlas/db'; //eslint-disable-line no-unused-vars

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if(req.method === 'OPTIONS')
    {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});
app.use('/', appController);
app.use('/starter', starterController);

app.use((req, res, next) => {
  const error = new Error('Route not found!');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {//eslint-disable-line no-unused-vars
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

export { app };

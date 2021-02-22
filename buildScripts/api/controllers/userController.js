import express from 'express';
import mongoose from 'mongoose';
import {UserModel as User} from '../models/user';
import chalk from 'chalk';

let router = express.Router();
let ObjectId = mongoose.Types.ObjectId;

/*=========================
    operations for /users
==========================*/

router.get('/', (req, res) => {//eslint-disable-line no-unused-vars
  User.find((error, docs) => {
    if (!error) {
        res.send(docs);
    }else {
        console.log( chalk.redBright('Error retriving Users: ' + JSON.stringify(error, undefined, 2)) );
    }
  });
});

router.post('/', (req, res) => {
  let user = new User({
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
    phone: req.body.phone
  });

  user.save((error, doc) => {
      if (!error) {
          res.send(doc);
      }else {
          console.log('Error Saving user: ' + JSON.stringify(error, undefined, 2));
      }
  });
});

export { router };

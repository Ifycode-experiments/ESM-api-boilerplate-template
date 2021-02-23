import express from 'express';
import mongoose from 'mongoose';
import {UserModel as User} from '../models/user';
import chalk from 'chalk';

let router = express.Router();
let ObjectId = mongoose.Types.ObjectId;

/* eslint-disable no-console */

/*=========================
    operations for /users
==========================*/

router.get('/', (req, res) => {//eslint-disable-line no-unused-vars
  User.find()
  .exec()
  .then(docs => {
    console.log( chalk.yellow(docs) );
    res.status(200).json(docs);
  })
  .catch(err => {
    console.log( chalk.redBright(`\nError retriving users: ${err}\n`) );
  });
});

router.post('/', (req, res) => {

  let user = new User({
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
    phone: req.body.phone
  });

  user.save()
  .then(doc => {
    console.log(doc);
    res.status(201).json({
      message: 'Handling POST requests to /users',
      createdUser: doc
    });
  })
  .catch(err => {
    console.log( chalk.redBright('Error saving user: \n\n' + JSON.stringify(err, undefined, 2)) );
    res.status(500).json({
      error: err
    });
  });
});

export { router };

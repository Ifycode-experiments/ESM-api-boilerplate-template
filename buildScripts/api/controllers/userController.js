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
  .select('_id name address email phone')
  .exec()
  .then(docs => {
    const response = {
      count: docs.length,
      users: docs.map(doc => {
        return {
          _id: doc._id,
          name: doc.name,
          address: doc.address,
          email: doc.email,
          phone: doc.phone,
          request: {
            type: 'GET',
            url: `http://localhost:3000/users/${doc._id}`
          }
        }
      })
    };
    res.status(200).json(response);
    console.log( chalk.greenBright('\nGet users request successful! \n\nRunning at http://localhost:3000/users/\n') );
  })
  .catch(err => {
    res.status(500).json({
        error: `${err}`
    });
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


/*===========================
    operations for /users/id
============================*/

router.delete('/:userId', (req, res, next) => {
  const id = req.params.userId;

  /*if (!ObjectId.isValid(id)) {
    console.log( chalk.greenBright(`\nNo record for this ID: ${id}\n`) );
    return res.status(404).json([
      `No record for this ID: ${id}`
    ]);
  }*/

  User.deleteOne({_id: id})
  .exec()
  .then(doc => {
    console.log(doc); //
    console.log( chalk.greenBright('\nUser deleted successfully!\n') );
    res.status(200).json({
      message: 'User deleted successfully',
      request: {
        type: 'POST',
        url: 'http://localhost:3000/users/',
        data: {
          name: 'String',
          address: 'String',
          email: 'String',
          phone: 'Number'
        }
      }
    });
  })
  .catch(err => {
    console.log( chalk.redBright(err));
    res.status(500).json({
      error: err
    });
  });
});

export { router };

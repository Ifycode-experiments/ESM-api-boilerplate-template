import express from 'express';
import mongoose from 'mongoose';
import { StarterModel as Starter } from '../models/starter';
import chalk from 'chalk';

let router = express.Router();

/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
let ObjectId = mongoose.Types.ObjectId;

let routeName = 'starter';
let item = `${routeName}-item`;

/*======================
  operations for /starter
=======================*/

router.get('/', (req, res) => {
  Starter.find()
  .select('_id name address email phone')
  .exec()
  .then(docs => {
    const response = {
      count: docs.length,
      items: docs.map(doc => {
        return {
          _id: doc._id,
          name: doc.name,
          address: doc.address,
          email: doc.email,
          phone: doc.phone,
          request: {
            type: 'GET',
            url: `http://localhost:3000/${routeName}/${doc._id}`
          }
        }
      })
    };
    res.status(200).json(response);
    console.log( chalk.greenBright(`\nGET request successful! \n\nRunning at http://localhost:3000/${routeName}/\n`) );
  })
  .catch(err => {
    res.status(500).json({
        error: `${err}`
    });
    console.log( chalk.redBright(`\nError retriving ${item}s: ${err}\n`) );
  });
});

router.post('/', (req, res) => {
  let starter = new Starter({
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
    phone: req.body.phone
  });

  starter.save()
  .then(doc => {
    res.status(201).json({
      message: `${item} created successfully!`,
      newItem: {
        _id: doc._id,
        name: doc.name,
        address: doc.address,
        email: doc.email,
        phone: doc.phone,
        request: {
          type: 'GET',
          url: `http://localhost:3000/${routeName}/${doc._id}`
        }
      }
    });
    console.log( chalk.greenBright(`\n${item} CREATED successfully! \n\nCreated ${item} url: http://localhost:3000/${routeName}/${doc._id}\n`) );
  })
  .catch(err => {
    res.status(500).json({
      error: `${err}`
    });
    console.log( chalk.redBright(`\nError saving ${item}: ${err}\n`) );
  });
});


/*=============================
  operations for /starter/starterId
==============================*/

router.get('/:starterId', (req, res, next) => {
  const id = req.params.starterId;
  Starter.findById(id)
  .select('_id name address email phone')
  .exec()
  .then(doc => {
    if (doc) {
      res.status(200).json({
        _id: doc._id,
        name: doc.name,
        address: doc.address,
        email: doc.email,
        phone: doc.phone,
        request: {
          type: 'GET',
          description: `Url link to all ${item}s`,
          url: `http://localhost:3000/${routeName}/`
        }
      });
      console.log( chalk.greenBright(`\nGET request successful! \n\n${item} url: http://localhost:3000/${routeName}/${doc._id}\n`) );
    }else {
      console.log( chalk.redBright('\nNo record found for provided ID\n') );
      return res.status(404).json({
        message: 'No record found for provided ID'
      });
    }
  })
  .catch(err => {
    res.status(500).json({
      message: 'Invalid ID',
      error: `${err}`
    });
    console.log( chalk.redBright(`\nError retriving ${item}: ${err}\n`) );
  });
});

router.patch('/:starterId', (req, res, next) => {
  const id = req.params.starterId;
  const updateOps = {};
  for  (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
  }
  Starter.updateOne({_id: id}, { $set: updateOps })
  .exec()
  .then(() => {
    console.log( chalk.greenBright(`\nPATCH request for ID ${id} successful! \n\nUpdated ${item} url: http://localhost:3000/${routeName}/${id}\n`) );
    return res.status(200).json({
      message: 'Patch request successful!',
      request: {
        type: 'GET',
        description: `Url link to updated ${item}`,
        url: `http://localhost:3000/${routeName}/${id}`
      }
    });
  })
  .catch(err => {
    res.status(500).json({
      message: `Error updating ${item} property & value`,
      error: `${err}`
    });
    console.log( chalk.redBright(`\nError updating ${item} property & value: ${err}\n`) );
  });
});

router.put('/:id', (req, res) => {
  let id = req.params.id;
  let resetItem = {
      name: req.body.name,
      address: req.body.address,
      email: req.body.email,
      phone: req.body.phone
  }

  Starter.findByIdAndUpdate(id, { $set: resetItem }, { new: true })
  .exec()
  .then(response => {
    console.log( chalk.greenBright(`\nPUT request for ID ${response._id} successful! \n\nUpdated ${item} url: http://localhost:3000/${routeName}/${id}\n`) );
    return res.status(200).json({
      message: `Put request successful!`,
      request: {
        type: 'GET',
        description: `Url link to updated ${item}`,
        url: `http://localhost:3000/${routeName}/${id}`
      }
    });
  })
  .catch(err => {
    res.status(500).json({
      message: `Error updating ${item}`,
      error: `${err}`
    });
    console.log( chalk.redBright(`\nError updating ${item}: ${err}\n`) );
  });
});

router.delete('/:starterId', (req, res, next) => {
  const id = req.params.starterId;
  Starter.deleteOne({_id: id})
  .exec()
  .then(doc => {
    console.log( chalk.greenBright(`\n${item} DELETED successfully!\n`) );
    res.status(200).json({
      message: `${item} deleted successfully!`,
      request: {
        type: 'POST',
        description: 'Url link to make post request to',
        url: `http://localhost:3000/${item}/`,
        body: {
          name: 'String',
          address: 'String',
          email: 'String',
          phone: 'Number'
        }
      }
    });
  })
  .catch(err => {
    res.status(500).json({
      message: `Error deleting ${item}`,
      error: `${err}`
    });
    console.log( chalk.redBright(`\nError deleting ${item}: ${err}\n`) );
  });
});

export { router };

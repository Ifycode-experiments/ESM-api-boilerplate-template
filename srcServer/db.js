import mongoose from 'mongoose';
import chalk from 'chalk';

/* eslint-disable no-console */

mongoose.connect(`mongodb://localhost:27017/${process.env.DBNAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},
 err => {
    if (!err)
        console.log( chalk.greenBright('\nMongoDB connection successful!!!') );
    else
        console.log( chalk.redBright(`\nError in DB connection: ${err.message} \n`) );
        console.log( chalk.yellowBright(`Please make sure you: \n1. Have mongoDB installed & running locally (or are connected to mongoDB atlas). \n2. Update nodemon.json file with your DB name (and password in the case of atlas).\n`) );
});

export const mongooseModuleExport = mongoose;

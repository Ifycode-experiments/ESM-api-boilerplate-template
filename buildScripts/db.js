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
        console.log( chalk.greenBright('MongoDB connection successful!!!') );
    else
        console.log( chalk.redBright(`Error in DB connection: ${err.message} \n`) );
});

export const mongooseModuleExport = mongoose;

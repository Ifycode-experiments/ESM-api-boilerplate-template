import mongoose from 'mongoose';
import chalk from 'chalk';

mongoose.connect(`mongodb://localhost:27017/${process.env.DBNAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},
 error => {
    if (!error)
        console.log( chalk.green('MongoDB connection successful!!!') );
    else
        console.log( chalk.red('Error in DB connection: ' + JSON.stringify(error, undefined, 2)) );
});

export const mongooseModuleExport = mongoose;

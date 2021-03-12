import mongoose from 'mongoose';
import chalk from 'chalk';

/* eslint-disable no-console */

const [username, password, clusterName, DBname] = ['insert-username', 'insert-password', 'insert-clusterName' , 'insert-DBname'];

mongoose.connect(`mongodb+srv://${username}:${password}@${clusterName}.mongodb.net/${DBname}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
},
err => {
  if (!err) {
    console.log( chalk.greenBright('\nMongoDB ATLAS connection successful!!!\n') );
  }
  else {
    console.log( chalk.redBright(`\nError in ATLAS DB connection: ${err.message} \n`) );
    console.log( chalk.yellowBright(`To use MongoDB ATLAS option, make sure you:
    => Have wifi/ data turned on and are connected to mongoDB atlas
       - See https://docs.atlas.mongodb.com/getting-started/
    => Update srcServer > atlas > db.js with your username, password, clusterName and DBname respectively
       - ensure you didn't mispell or include wrong details.

  To use or see guide for installed mongoDB option:
    => Comment out import for === MongoDB ATLAS db === in srcServer > app.js,
      and use import for === Installed mongoDB's db === instead.
    `
    ) );
  }
});

export const mongooseModuleExportAtlas = mongoose;

import https from 'https';
import open from 'open';
import app from './app';

const port = process.env.PORT || 3000;
const server = https.createServer(app);

/* eslint-disable no-console */

server.listen(port, () => {
  try {
    open(`http://localhost:${port}${users}`);
  }catch(err) {
    console.log(err);
  }
});

import http from 'http';
import open from 'open';
import { app as app} from './app';

const port = process.env.PORT || 3000;
const server = http.createServer(app);

/* eslint-disable no-console */

server.listen(port, () => {
  try {
    open(`http://localhost:${port}`);
  }catch(err) {
    console.log(err);
  }
});

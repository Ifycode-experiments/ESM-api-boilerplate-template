import express from 'express';
import open from 'open';

const port = 3000;
const app = express();

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});

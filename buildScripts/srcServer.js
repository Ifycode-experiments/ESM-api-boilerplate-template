import express from 'express';
import open from 'open';

const port = 3000;
const app = express();

app.listen(port, () => {
  try {
    open(`http://localhost:${port}`);
  }catch(err) {
    console.log(err);
  }
});

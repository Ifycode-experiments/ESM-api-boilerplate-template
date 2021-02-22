import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
  try {
    res.json({
      "message": "user controller working fine!"
    });
  }catch(err) {
    res.json({
      "error": "not woring!"
    });
  }
});

export { router };

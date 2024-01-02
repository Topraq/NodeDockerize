const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config()

app.get('/', (req, res) => {
  res.send(`${process.env.TEST}`);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
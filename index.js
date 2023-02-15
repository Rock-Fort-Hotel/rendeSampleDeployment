const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/api/data', (req, res) => {
  const data = req.body;
  console.log(data);
  res.send(data);
});

app.listen(9000, () => {
  console.log('Server listening on port 3000');
});
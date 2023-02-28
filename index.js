const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();
app.use(cors());


app.post('/api/data', (req, res) => {
  const title = req.body.title;
  const data = [];

  if (title === false) {
    data.push({
      "column": "title",
      "severity": "warning",
      "message": "choose software engineer."
    });
  }

  res.send(JSON.stringify(data));
});

app.listen(9000, () => {
  console.log('Server listening on port 9000');
});



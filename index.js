const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/api/data', (req, res) => {
  const data =[{
    "row_id": 2,
    "column": "user_id",
    "severity": "warning",
    "message": "Employee no longer works for company."
  }];
  //res.send(data);
  // res.status(200).json(data);
  
  res.send(JSON.stringify(data));
  
});

app.listen(9000, () => {
  console.log('Server listening on port 9000');
});



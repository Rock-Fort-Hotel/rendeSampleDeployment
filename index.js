const express = require('express');
const bodyParser = require('body-parser');
const Joi = require('joi');
const jsonwebtoken = require("jsonwebtoken");

const app = express();

app.use(bodyParser.json());



// The secret should be an unguessable long string (you can use a password generator for this!)
const JWT_SECRET =
  "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";



  //sample data from the oneschema format
app.post('/api/data', (req, res) => {
  const data =[{
    "row_id": 2,
    "column": "user_id",
    "severity": "warning",
    "message": "Employee no longer works for company."
  }];
  

  res.send(JSON.stringify(data));
  
});

//login beyond cloud  resource
app.get("/super-secure-resource", (req, res) => {
  res
    .status(401)
    .json({ message: "You need to be logged in to access this resource" });
});


//2.Return a JWT token on successful login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(`${username} is trying to login ..`);

  if (username === "admin" && password === "admin") {
    return res.json({
      token: jsonwebtoken.sign({ user: "admin" }, JWT_SECRET),
    });
  }

  return res
    .status(401)
    .json({ message: "The username and password your provided are invalid" });
});



app.listen(9000, () => {
  console.log('Server listening on port 9000');
});
 


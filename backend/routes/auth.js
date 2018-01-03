var express = require('express');
var auth = express.Router();

auth.get('/', (req, res) => {
  res.send('Hello World! - Auth');
  console.log('Hello World! - Auth');
});

auth.post('/register', (req, res) => {
  console.log(req.body);
  res.send('recieved');
});

module.exports = auth;

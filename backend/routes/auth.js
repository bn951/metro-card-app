var express = require('express');
var auth = express.Router();

auth.get('/', (req, res) => {
  res.send('Hello World! - Auth');
});

module.exports = auth;

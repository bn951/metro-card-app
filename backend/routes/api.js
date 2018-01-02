var express = require('express');
var api = express.Router();

api.get('/', (req, res) => {
  res.send('Hello World! - API');
});

module.exports = api;

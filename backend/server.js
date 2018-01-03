var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

var apiRoutes = require('./routes/api');
var authRoutes = require('./routes/auth');

var PORT = 4201;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use('/api', apiRoutes);
app.use('/auth', authRoutes);

// Testing
/*
app.get('/', (req, res) => {
  console.log('recieved get request');
  res.send('Hello World!');
});
*/
app.listen(PORT);

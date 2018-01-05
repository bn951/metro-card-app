var express = require('express');
var auth = express.Router();
var db = require('../db/db.js');
var User = require('../db/models/User.js');
var bcrypt = require('bcryptjs');

auth.get('/', (req, res) => {
  res.send('Hello World! - Auth');
  console.log('Hello World! - Auth');
  console.log(User.find());
});

auth.post('/register', (req, res) => {
  bcrypt.genSalt(10, function(err, salt) {
    if(err) console.log(err);
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      if(err) console.log(err);
      User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash
      }, function(err) {
        if(err) {
          console.log(err);
          res.send('user could not be saved');
        }
        res.send('success');
      });
    });
  });
});

module.exports = auth;

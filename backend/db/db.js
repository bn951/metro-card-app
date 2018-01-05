var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/metro-card-app', { useMongoClient: true }, function() {
  console.log('mongodb connected');
});
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


module.exports = db;

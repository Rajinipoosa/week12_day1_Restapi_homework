var express = require('express');
var app = express();
var path = require('path')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// var newfolder = function(){

  app.use(require('./controllers/index.js'));
   // app.use(express.static('client/build'));
   


app.listen(3000, function () {
  console.log('App running on port '+this.address().port);
});

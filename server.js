var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');

var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/public/dist/public'));

mongoose.Promise = global.Promise;
require('./backend/config/mongoose');
require('./backend/config/routes')(app);

app.listen(8000, function(){
    console.log('listening on port 8000');
});
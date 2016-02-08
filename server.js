
// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost/social_server');

// Express
var app = express();

app.use(express.static(__dirname + '/public'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./js/routes/api'));

app.use(express.static('public'));
// app.use('/index', require('./index.html'));

// Start server
app.listen(3000);
console.log('API is running on port 3000');
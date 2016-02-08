
// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/product');
var Comment = require('../models/comment');

// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

Comment.methods(['get', 'put', 'post', 'delete']);
Comment.register(router, '/comments');

// Return router
module.exports = router;
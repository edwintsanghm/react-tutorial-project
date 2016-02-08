
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var commentSchema = new mongoose.Schema({
    id: Number,
    author: String,
    text: String
});

// Return model
module.exports = restful.model('Comments', commentSchema);

// Dependencies
import restful from 'node-restful';

const mongoose = restful.mongoose;

export default restful.model('Comments', new mongoose.Schema({
    id: Number,
    author: String,
    text: String
}));
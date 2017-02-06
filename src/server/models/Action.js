// Dependencies
import restful from 'node-restful';

const mongoose = restful.mongoose;

var ActionSchema = new mongoose.Schema({
    number: Number,
    price: Number,
    shares: Number,
    type: String
});

export default restful.model('Actions', ActionSchema);
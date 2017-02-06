// Dependencies
import restful from 'node-restful';

const mongoose = restful.mongoose;

var StockSchema = new mongoose.Schema({
    price: Number,
    volume: Number
});

var DailyStockSchema = new mongoose.Schema({
    number: Number,
    name: String,
    dailyStock: [StockSchema]
});

export default restful.model('Stocks', StockSchema);
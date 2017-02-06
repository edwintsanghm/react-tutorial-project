
import Express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import path from 'path';

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config';

import apiRoutes from './controllers/api.js';

//test
import csv from 'fast-csv';

mongoose.connect('mongodb://localhost/social_server');

// Express
const app = new Express();

const port = process.env.PORT || 3000;

app.use(Express.static(path.join(__dirname + '/public')));
app.use(Express.static('public'));

// app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));



// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

// Routes
app.use('/api', apiRoutes);

app.get('/finance', function(req, res){
	res.send('finance');

	csv
    .fromPath("test.csv")
    .on("data", function(data) {
        console.log(data);
    })
    .on("end", function() {
        console.log("done");
    });

});

// Start server
app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==>  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
});
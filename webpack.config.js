import webpack from 'webpack';

// webpack.config.js
export default {
    entry: './src/client/index.js',
    output: {
        path: `${__dirname}/public`,
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        preLoaders: [{
            test: /\.jsx$|\.js$/,
            loader: 'eslint-loader',
            include: `${__dirname}/app`,
            exclude: /bundle\.js$/,
        }, ],
        plugins: [
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ],

        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
            // query: {
            //     presets: ['es2015', 'react']
            // }
        }]
    }
}


;

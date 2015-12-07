var path = require('path');

var autoprefixer = require('autoprefixer-core');
var cssnext = require('cssnext');
var doiuse = require('doiuse');
var colors = require('colors');
var wordwrap = require('wordwrap');
var csswring = require('csswring');
var nested = require('postcss-nested');

module.exports = {
    entry: {
        app: ['./src/js/app.js']
    },
    output: {
        path: require('path').resolve('build'),
        publicPath: '/',
        filename: 'bundle.js',
        library: 'FluffyStorage'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    postcss: [
        nested,
        cssnext,
        autoprefixer,
        csswring
    ],
    plugins: []
};

var path = require('path');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var DashboardPlugin = require('webpack-dashboard/plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var rules = require('./webpack.rules');

module.exports = function(env) {
    return {
        devtool: 'source-map',
        resolve: {
            extensions: [ '.js', '.jsx' ]
        },
        entry: [
            'react-hot-loader/patch', // activate HMR for React
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './app/index.jsx'
        ],
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'public'),
            publicPath: '/'
        },
        devServer: {
            hot: true, // enable HMR on the server,
            inline: true,
            noInfo: true, // don't print build stats,
            historyApiFallback: true,
            contentBase: path.resolve(__dirname, 'public'),
            publicPath: '/'
        },
        module: {
            rules
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(), // enable HMR globally
            new webpack.NamedModulesPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: function(module) {
                    // Our vendor libraries come from node_modules
                    return module.context && module.context.indexOf('node_modules') !== -1;
                }
            }),
            // new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true }), // Add for production later
            new DashboardPlugin(),
            new HtmlWebpackPlugin({
                template: './app/index.html'
            })
        ]
    };
};

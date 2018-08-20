const path = require('path');
const WebpackNotifierPlugin = require("webpack-notifier");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const customConfigs = require('./webpack.custom'); // Using your own configs

module.exports = {
    entry: customConfigs.entryPoint,// which file to begin with 
    output: {
        path: path.resolve(__dirname, customConfigs.distDir), // what folder to put bundle in
        filename: '[name].[hash].js', // what name to use for bundle
        chunkFilename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, "src"),
                    path.resolve(__dirname, "node_modules/react-pretence-router")
                ],
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new WebpackNotifierPlugin({ alwaysNotify: true }),
        new HtmlWebpackPlugin({ template: customConfigs.htmlTemplate }),
        new CleanWebpackPlugin(customConfigs.distDir)
    ]
};
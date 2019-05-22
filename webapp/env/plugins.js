const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = [
    new HtmlWebpackPlugin({template:__dirname +'index.html'}),
]

module.exports = [
    ...common
]
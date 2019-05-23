const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
console.log(path.resolve(__dirname,'index.html'),'-----------')
const common = [
    new HtmlWebpackPlugin({template:'./index.html'}),
]

module.exports = [
    ...common
]
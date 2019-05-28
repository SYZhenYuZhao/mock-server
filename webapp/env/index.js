const plugins = require('./plugins')
//const modules = require('./module')
const path = require('path')

const filename = '[name].js'

let config = {
    entry:{
        app:'./index.js'
    },
    output:{
        filename,
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    plugins
}

module.exports = config;
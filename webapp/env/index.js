const Plugins = require('./plugins')
const Module = require('./module')
const path = require('path')

const filename = '[name].js'

let config = {
    entry:{
        app:'./src/index.js'
    },
    output:{
        filename,
        path: path.resolve(__dirname,'dist')
    },
    module: Module,
    plugins: Plugins
}

module.exports = config;
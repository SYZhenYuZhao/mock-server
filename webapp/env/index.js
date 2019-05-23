const plugins = require('./plugins')
const path = require('path');

const filename = '[name].js'

let config = {
    entry:{
        app:'./index.jsx'
    },
    output:{
        filename,
        path: path.resolve(__dirname,'dist')
    },
    plugins
}

module.exports = config;
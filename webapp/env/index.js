const plugins = require('./plugins')

const filename = '[name].js'

let config = {
    entry:{
        app:'../index.jsx'
    },
    output:{
        filename,
        path: __dirname + '/dist'
    },
    plugins
}
let module = {
    rules:[
        {
            test:/\(.js|jsx)$/,
            use:'babel-loader',
            exclude: /node_modules/
        }
    ]
}

module.exports = module
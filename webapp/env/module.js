let Module = {
    rules:  [{
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
    },{
        test: /\.css$/,
        use: [
            {
                loader:require.resolve('style-loader')
            },
            {
                loader: require.resolve('css-loader')
            }
        ],
    }]
}

module.exports = Module

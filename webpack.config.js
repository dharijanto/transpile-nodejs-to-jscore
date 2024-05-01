const path = require("path")

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', "./src/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        library: {
            name: "bundle",
            type: "var"
        }
    }   
}
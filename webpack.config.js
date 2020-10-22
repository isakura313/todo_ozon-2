const path = require('path');

module.exports = {
    entry: './js/code.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js'
    }
};

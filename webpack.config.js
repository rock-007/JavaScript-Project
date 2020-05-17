// path is the module in node.js core library
const path = require('path');

//{} is object here and has info how the webpack will run
module.exports ={
    // entry is relevant path ./ is current directory notation
    entry: './src/index.js',
    output: {
        //__dirname= absolute path this this directory
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'


    }
};
const path = require('path');
require('dotenv').config();

const webpack = require('@dolittle/typescript.webpack.aurelia').webpack
const config = webpack(__dirname);

module.exports = config;
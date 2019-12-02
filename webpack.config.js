const path = require('path');
require('dotenv').config();

process.env.DOLITTLE_WEBPACK_ROOT = path.resolve('./');
process.env.DOLITTLE_WEBPACK_OUT = path.resolve('./wwwroot');
process.env.DOLITTLE_FEATURES_DIR = path.resolve('./Features');
process.env.DOLITTLE_COMPONENT_DIR = path.resolve('./Components');

const webpack = require('@dolittle/typescript.webpack.aurelia').webpack
const config = webpack(__dirname);

module.exports = config;
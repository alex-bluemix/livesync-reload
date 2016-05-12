// Module dependencies.
const express = require('express');
const path    = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');

// create the express erver
const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

// configure webpack middleware
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

// configure the express server
app.set('port', port);
app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/', express.Router().get('/', function (req, res) {
  res.render('index');
}));

// Start her up, boys
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

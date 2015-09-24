//------------------------------------------------------------------------------
// Copyright IBM Corp. 2015
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//------------------------------------------------------------------------------

/** Module dependencies. */
var express    = require('express');
var bodyParser = require('body-parser');
var path       = require('path');
var logger     = require('morgan');

// configure the express server
var app = express();
var port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
app.set('port', port + 5);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/', express.Router().get('/', function (req, res) {
  res.render('index');
}));

/** Start her up, boys */
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

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

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var nodeDev     = require('node-dev');

/**
 * Kick off a node-dev "watch" for automatic server restarts
 * when server files change
 */
gulp.task('node-dev', function () {
  nodeDev('server/app.js', ['--all-deps'], []);
});

/**
 * In dev mode, watch for changes in client code and Less and
 * rebuild bundle.js or style.css when these happen. Kick off
 * a server that restarts when server-side code changes. Kick
 * off a browserSync that injects css changes in to the page,
 * and reloads the page on javascript or html changes
 */
gulp.task('dev', ['node-dev'], function () {
  gulp.watch('./public/index.html').on('change', browserSync.reload);
  gulp.watch('./public/style.css', function () {
    gulp.src('./public/style.css').pipe(browserSync.stream());
  });

  // configure the browsersync to proxy
  // through our node server
  var port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
  browserSync({
    proxy: 'localhost:' + port,
    port: port + 1
  });
});

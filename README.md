# Bluemix Live Sync Reload

We're going to be combining [Weback's dev middleware][wdm] with [Bluemix's Live
Sync][ls]. The end game allows you to change code, hit save on your local IDE,
have those changes propagate up to Bluemix, and trigger an automagic Webpack
rebundle, with 0 downtime or reploys.

Checkout the blog post about this [here](http://jkaufman.io/live-sync-reload/)

## How to Set Up

  1. Follow all steps [here][ls]
  1. Setup your [webpack config][wgh]
  1. Setup webpack dev and webpack hot middleware in your [node server][sv]
  1. Prosper

## What's actually happening

Well since you've followed the first step of following [these steps][ls], you're
already an expert in how Bluemix Livesync works. You're already aware that you
can use either the online editor or your local IDE to update the code in your
running app without redeploying it.

However, what do you do if your client code is more complicated than a simple
html/js/css file?

Enter Webpack.

Combining Bluemix Livesync with Webpack's Hot Rebundling allows you to harness
the magic of Livesync's code syncing while still having a "complicated" app that
needs transpilation - because you're awesome and are using ES6 or React or etc
etc. When Bluemix does it's thing, Webpack senses the file change and rebundles
your code for you.

Magic!

[ls]:  https://hub.jazz.net/tutorials/livesync/
[wdm]: https://webpack.github.io/docs/webpack-dev-middleware.html
[wgh]: https://github.com/kauffecup/livesync-reload/blob/master/server/webpack.config
[ix]:  https://github.com/kauffecup/livesync-reload/blob/master/app/index.js
[sv]:  https://github.com/kauffecup/livesync-reload/blob/master/server/app.js

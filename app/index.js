import React, { Component } from 'react';
import { render } from 'react-dom';

// get our css in here
require('./style.css');

class MyApp extends Component {
  render() {
    return(
      <div className="live-sync-reload">
        <h1>Live Sync Reload</h1>
        <p>An explanation of what's going on...</p>
        <p>...might one day go here.</p>
      </div>
    );
  }
}

// put it in the page!
const rootElement = document.getElementById('root');
render( <MyApp />, rootElement);

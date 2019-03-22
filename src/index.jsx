// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const root = document.getElementById('root');

// Flow does not like we calling ReactDOM.render with a nullable Element, so
// lets throw an error whenever that happens.
if (!root) {
  throw new Error('Could not find the root element on the current page.');
}

ReactDOM.render(<App />, root);

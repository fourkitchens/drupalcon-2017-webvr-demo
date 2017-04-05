/**
 * @file index.js
 * Entry file for this application.
 */

import 'aframe';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import NoMatch from './components/scenes/NoMatch.jsx';
import { SuzyOne, SuzyTwo } from './components/scenes/Suzy.jsx';

require('./styles/index.scss');

/**
 * Renders a scene that allows useres to navigate to other scenes.
 * {@inheritdoc}
 */
const NavigationScene = () => (
  <HashRouter>
    <div>
      <Route path="/suzy/one" component={SuzyOne} />
      <Route path="/suzy/two" component={SuzyTwo} />
      <Route component={NoMatch} />
    </div>
  </HashRouter>
);

// Render the NavigationScene component in the scene container div.
ReactDOM.render(<NavigationScene />, document.querySelector('.application-container'));

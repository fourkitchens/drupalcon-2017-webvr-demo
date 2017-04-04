/**
 * @file index.js
 * Entry file for this application.
 */

import 'aframe';
import React from 'react';
import ReactDOM from 'react-dom';

import Scene from './components/Scene.jsx';

require('./styles/index.scss');

/**
 * Renders a scene that allows useres to navigate to other scenes.
 * {@inheritdoc}
 */
class NavigationScene extends React.Component {
  /**
   * Initialize class properties.
   */
  constructor(props) {
    super(props);

    this.state = {};
    this.state.scenes = {
      firstScene: require('./scenes/firstScene.jsx'),
      secondScene: require('./scenes/secondScene.jsx'),
    };
  }

  render() {
    return (
      <Scene>
        <a-sky color="#000000" />
      </Scene>
    );
  }
}

// Render the NavigationScene component in the scene container div.
ReactDOM.render(<NavigationScene />, document.querySelector('.application-container'));

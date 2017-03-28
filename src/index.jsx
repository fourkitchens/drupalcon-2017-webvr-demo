/**
 * @file index.js
 * Entry file for this application.
 */

import 'aframe';
import { Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera.jsx';

require('./styles/index.scss');

/**
 * Returns an empty scene (for now).
 * {@inheritdoc}
 */
class VRScene extends React.Component {
  /**
   * Constructs this component.
   */
  constructor(props) {
    super(props);
    this.state = { color: 'red' };
  }

  /**
   * Changes the color state property to a random color.
   */
  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({ color: colors[Math.floor(Math.random() * colors.length)] });
  }

  render() {
    return (
      <Scene>
        <Camera />

        <a-circle
          color={this.state.color}
          radius="5"
          position="0 0 -10"
          onClick={() => this.changeColor()}
        />

        <a-sky color="#000000" />
      </Scene>
    );
  }
}

// Render the VRSceme component in the scene container div.
ReactDOM.render(<VRScene />, document.querySelector('.application-container'));

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
      <Scene inspector="url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js">
        <a-assets>
          <img id="sky" src={require('./assets/images/abstract.jpg')} />
        </a-assets>
        <Camera />

        <a-circle
          color={this.state.color}
          radius="1"
          position="-90 10 -45"
          rotation="0 90 0"
          scale="6 6 0"
          onClick={() => this.changeColor()}
        />

        <a-sky src="#sky" />
      </Scene>
    );
  }
}

// Render the VRSceme component in the scene container div.
ReactDOM.render(<VRScene />, document.querySelector('.application-container'));

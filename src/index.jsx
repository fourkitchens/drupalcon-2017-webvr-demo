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
const VRScene = () => (
  <Scene>
    <a-sky color="#000000" />
    <Camera />
  </Scene>
);

// Render the VRSceme component in the scene container div.
ReactDOM.render(<VRScene />, document.querySelector('.application-container'));
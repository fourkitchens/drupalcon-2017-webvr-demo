/**
 * @file Scene.jsx
 * Exports a custom, configurable scene.
 */

import { Scene as AframeScene } from 'aframe-react';
import React from 'react';

import Camera from './Camera.jsx';

/**
 * Renders a custom, configurable scene.
 * {@inheritdoc}
 */
class Scene extends AframeScene {
  render() {
    return (
      <AframeScene inspector={{ url: 'https://aframe.io/releases/0.3.2/aframe-inspector.min.js' }}>
        <Camera />
        {this.props.children}
      </AframeScene>
    );
  }
}

export default Scene;

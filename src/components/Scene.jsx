/**
 * @file Scene.js
 * Exports a custom, configurable scene.
 */

import { Scene as AframeScene } from 'aframe-react';
import React from 'react';

/**
 * Renders a custom, configurable scene.
 * {@inheritdoc}
 */
class Scene extends AframeScene {
  render() {
    return (
      <AframeScene inspector="url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js">
        {this.props.children}
      </AframeScene>
    );
  }
}

export default Scene;

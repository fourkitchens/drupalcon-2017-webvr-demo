/**
 * @file Camera.jsx
 * Exports camera component.
 */

import { Entity } from 'aframe-react';
import React from 'react';

require('aframe-mouse-cursor-component');

/**
 * Returns React component containing cursor and Camera.
 * {@inheritdoc}
 */
const Camera = props => (
  <Entity
    id="camera"
    mouse-cursor
    camera
    look-controls {...props}
  >
    <a-entity
      cursor="fuseTimeout: 500"
      position="0 0 -1"
      geometry="primitive: ring; radiusInner: 0.01; radiusOuter: 0.02"
      material="color: white; shader: flat"
    >
      <a-animation
        begin="click"
        attribute="material.color"
        from="white"
        to="grey"
        direction="alternate"
        repeat="1"
        dur="300"
      />
    </a-entity>
  </Entity>
);

export default Camera;

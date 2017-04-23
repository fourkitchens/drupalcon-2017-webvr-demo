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
    <Entity
      id="cursor"
      cursor
      fuse
      fuseTimeout="250"
      position="0 0 -1"
      color="white"
      geometry={{
        primitive: 'ring',
        radiusInner: 0.01,
        radiusOuter: 0.02,
      }}
      material={{
        color: 'white',
        shader: 'flat',
      }}
    >
      <a-animation
        begin="cursor-fusing"
        easing="ease-in"
        attribute="scale"
        fill="forwards"
        direction="alternate"
        repeat="1"
        dur="500"
        from="1 1 1"
        to="0.1 0.1 0.1"
      />
    </Entity>
  </Entity>
);

export default Camera;

/**
 * @file Camera.js
 * Exports camera component.
 */

import { Entity } from 'aframe-react';
import React from 'react';

/**
 * Returns React component containing cursor and Camera.
 * {@inheritdoc}
 */
const Camera = props => (
  <Entity camera look-controls {...props}>
    <Entity
      cursor={{}}
      fuse="true"
      position="0 0 -1"
      geometry={{
        primitive: 'ring',
        radiusInner: 0.01,
        radiusOuter: 0.02,
      }}
      animation__click={{
        property: 'scale',
        startEvents: 'click',
        from: '0.1 0.1 0.1',
        to: '1 1 1',
        dur: '150',
      }}
      material={{
        color: 'white',
        shader: 'flat',
      }}
    />
  </Entity>
);

export default Camera;

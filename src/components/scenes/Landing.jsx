/**
 * @file Landing.jsx
 * This file exports all assets pertaining to the Landing scene.
 */

import { Entity } from 'aframe-react';
import React from 'react';

require('aframe-look-at-component');

/**
 * Returns React component that renders the Landing scene.
 */
const Landing = {
  name: 'landing',
  sky: false,
  skyColor: '#24CAFF',
  scene: () => (
    <Entity
      id="landing__terrain"
      primitive="a-obj-model"
      src={require('../../assets/3d/landing.obj')}
      mtl={require('../../assets/3d/landing.mtl')}
      scale={{ x: 20, y: 20, z: 20 }}
      position={{ x: 0, y: 0, z: -2 }}
      rotation={{ x: 0, y: 200, z: 0 }}
    />
  ),
};

export default Landing;

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
  skyColor: '#93D3E9',
  cameraRotation: { x: 0, y: -68, z: 0 },
  scene: () => (
    <Entity>
      <Entity
        id="landing__terrain"
        primitive="a-obj-model"
        src={require('../../assets/3d/landing.obj')}
        mtl={require('../../assets/3d/landing.mtl')}
        scale={{ x: 20, y: 20, z: 20 }}
        position={{ x: 53, y: 1.8, z: -45 }}
        rotation={{ x: -1.08, y: 200, z: 0 }}
      />
      <Entity
        light={{
          type: 'directional',
          color: '#e3e3cd',
          intensity: 0.5,
        }}
        position={{ x: -237.22, y: 229.59, z: -185.12 }}
        rotation={{ x: -5.30, y: 14.14, z: 3.16 }}
      />
      <Entity
        light={{
          type: 'ambient',
          color: '#e3e3cd',
          intensity: 0.98,
        }}
        position={{ x: -237.22, y: 229.59, z: -185.12 }}
        rotation={{ x: -5.30, y: 14.14, z: 3.16 }}
      />
    </Entity>
  ),
};

export default Landing;

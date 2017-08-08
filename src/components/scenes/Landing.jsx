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
        id="landing__links"
        scale={{ x: 6, y: 6, z: 6 }}
        position={{ x: 6.8, y: 0, z: -2.6 }}
        rotation={{ x: 0, y: -68, z: 0 }}
      >
        <Entity
          primitive="a-text"
          value="Working with the Web Chefs"
          align="center"
          position={{ x: 0, y: 0.8, z: 0 }}
        />
        <a-plane
          id="landing__link-mike-workshop"
          width={0.5}
          height={0.31}
          color="#FFFFFF"
          position="-0.35 0.35 0"
          rotation="0 4.3 0"
          onClick={() => { window.location.hash = 'mike-workshop'; }}
          text="color: #000000; align: center; value: Mike's Workshop; width: 1"
        />
        <a-plane
          id="landing__link-mike-office"
          width={0.5}
          height={0.31}
          color="#FFFFFF"
          position="-0.35 0 0"
          rotation="0 4.3 0"
          onClick={() => { window.location.hash = 'mike-office'; }}
          text="color: #000000; align: center; value: Mike's Office; width: 1"
        />
        <a-plane
          id="landing__link-suzy-office"
          width={0.5}
          height={0.31}
          color="#FFFFFF"
          position="0.35 0.35 0"
          rotation="0 -4.3 0"
          onClick={() => { window.location.hash = 'suzy-office'; }}
          text="color: #000000; align: center; value: Suzy's Office; width: 1"
        />
        <a-plane
          id="landing__link-suzy-backyard"
          width={0.5}
          height={0.31}
          color="#FFFFFF"
          position="0.35 0 0"
          rotation="0 -4.3 0"
          onClick={() => { window.location.hash = 'suzy-backyard'; }}
          text="color: #000000; align: center; value: Suzy's Backyard; width: 1"
        />
      </Entity>
    </Entity>
  ),
};

export default Landing;

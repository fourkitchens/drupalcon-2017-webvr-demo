/**
 * @file Suzy.jsx
 * This file exports all scenes pertaining to Suzy Bate's workspace.
 */

import { Entity } from 'aframe-react';
import React from 'react';

import Scene from '../Scene.jsx';

/**
 * Returns React component that render's Suzy Bate's initial scene.
 * {@inheritdoc}
 */
const SuzyOne = () => (
  <Scene>
    <Entity primative="a-assets">
      <img id="sky" src={require('../../assets/images/scenes/suzy-front-house.png')} />
    </Entity>

    <Entity primitive="a-sky" src="#sky" />
  </Scene>
);

/**
 * Returns React component that render's Suzy Bate's second scene.
 * {@inheritdoc}
 */
const SuzyTwo = () => (
  <Scene>
    <Entity primative="a-assets">
      <img id="sky" src={require('../../assets/images/scenes/suzy-backyard-shed.png')} />
    </Entity>

    <Entity primitive="a-sky" src="#sky" />
  </Scene>
);

export { SuzyOne, SuzyTwo };

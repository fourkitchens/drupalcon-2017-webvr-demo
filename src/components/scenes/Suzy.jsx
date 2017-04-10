/**
 * @file Suzy.jsx
 * This file exports all scenes pertaining to Suzy Bate's workspace.
 */

import { Entity } from 'aframe-react';
import React from 'react';

import Link from '../Link.jsx';

/**
 * Returns React component that render's Suzy Bate's initial scene.
 */
const SuzyOne = {
  name: 'suzy-front-house',
  sky: require('../../assets/images/scenes/suzy-front-house.png'),
  scene: () => (
    <Entity>
      <Link to={'suzy-back-house'} />
    </Entity>
  ),
};

/**
 * Returns React component that render's Suzy Bate's second scene.
 */
const SuzyTwo = {
  name: 'suzy-back-house',
  sky: require('../../assets/images/scenes/suzy-backyard-shed.png'),
  scene: () => '',
};

export { SuzyOne, SuzyTwo };

/**
 * @file Suzy.jsx
 * This file exports all scenes pertaining to Suzy Bate's workspace.
 */

import { Entity } from 'aframe-react';
import React from 'react';

import Link from '../Link.jsx';
import Sound from '../Sound.jsx';

/**
 * Returns React component that render's Suzy Bate's initial scene.
 */
const SuzyTwo = {
  name: 'suzy-office',
  sky: require('../../assets/images/scenes/suzy-office.jpg'),
  scene: () => (
    <Entity>
      <Link to={'no-match'} />
      <Sound mp3={require('../../assets/sounds/can-open.mp3')} position={{ x: -20, y: 0, z: -10 }} />
    </Entity>
  ),
};

export default SuzyTwo;

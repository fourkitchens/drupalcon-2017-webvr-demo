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
const SuzyOne = {
  name: 'suzy-back-yard',
  sky: require('../../assets/images/scenes/suzy-back-yard.jpg'),
  scene: () => (
    <Entity>
      <Link id={'hotspot-office-1'} to={'suzy-office'} position={{ x: 24, y: 0, z: -4 }} />
      <Sound id={'sound-joke-2'} mp3={require('../../assets/sounds/can-open.mp3')} position={{ x: 22, y: -3, z: 18 }} />
      <Link id={'hotspot-house-3'} to={'suzy-house'} position={{ x: -16, y: 3, z: 21.5 }} />
      <Link id={'hotspot-treehouse-4'} to={'suzy-house'} position={{ x: -17, y: 19, z: -11 }} />
      <Sound id={'sound-some-webchefs-5'} mp3={require('../../assets/sounds/can-open.mp3')} position={{ x: 22, y: -1.5, z: -9 }} />
    </Entity>
  ),
};

export default SuzyOne;

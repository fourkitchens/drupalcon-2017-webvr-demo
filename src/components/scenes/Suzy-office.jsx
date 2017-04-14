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
      <Link id={'hotspot-badges-1'} to={'suzy-office'} position={{ x: 11, y: 0.77, z: -17.86 }} />
      <Link id={'hotspot-quilt-2'} to={'suzy-office'} position={{ x: 21.57, y: -7.16, z: -6.91 }} />
      <Link id={'hotspot-years-3'} to={'suzy-office'} position={{ x: -0.51, y: 17.65, z: -8.48 }} />
      <Link id={'hotspot-thread-4'} to={'suzy-office'} position={{ x: 4.24, y: 0.62, z: 19.42 }} />
      <Link id={'hotspot-computer-5'} to={'suzy-office'} position={{ x: -13.9, y: -3.05, z: 6.48 }} />
      <Link id={'hotspot-yard-6'} to={'suzy-backyard'} position={{ x: 0.86, y: -7.10, z: -17.73 }} />
      <Sound click-drag id={'sound-joke-2'} mp3={require('../../assets/sounds/can-open.mp3')} position={{ x: 11, y: 0.77, z: -17.86 }} />
    </Entity>
  ),
};

export default SuzyTwo;

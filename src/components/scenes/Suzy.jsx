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
  name: 'suzy-back-yard',
  sky: require('../../assets/images/scenes/suzy-back-yard.jpg'),
  scene: () => (
    <Entity>
      <Link to={'no-match'} />
    </Entity>
  ),
};

export { SuzyOne };

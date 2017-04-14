/**
 * @file NoMatch.jsx
 * This may be the first WebVR 404 experience ever created 🕶 😰.
 */

import { Entity } from 'aframe-react';
import React from 'react';

import Modal from '../Modal.jsx';
import Sound from '../Sound.jsx';
import Link from '../Link.jsx';

/**
 * Returns React component that render's a 404 Not Found scene.
 * {@inheritdoc}
 */
const NoMatch = {
  name: 'no-match',
  sky: require('../../assets/images/no-match.png'),
  scene: () => (
    <Entity>
      <Modal
        visible
        title="404, not found!"
        content={['The scene you are looking for does not exist.',
          'We\'re so sorry! We\'ll notice this in our analytics, and',
          'resolve the issue :) Thanks for exploring our VR scenes!'].join(' ')}
        to="#"
        image={require('../../assets/images/404-cuteness.jpg')}
      />

      <Link to="#" position={{ x: 20, y: 0, z: -10 }} />

      <Sound mp3={require('../../assets/sounds/can-open.mp3')} position={{ x: -20, y: 0, z: -10 }} />
    </Entity>
  ),
};

export default NoMatch;

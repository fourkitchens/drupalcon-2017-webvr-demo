/**
 * @file NoMatch.jsx
 * This may be the first WebVR 404 experience ever created 🕶 😰.
 */

import { Entity } from 'aframe-react';
import React from 'react';

import Modal from '../Modal.jsx';

require('aframe-particle-system-component');

/**
 * Returns React component that render's a 404 Not Found scene.
 * {@inheritdoc}
 */
const NoMatch = {
  name: 'no-match',
  sky: require('../../assets/images/no-match.png'),
  scene: () => (
    <Entity>
      <Entity
        particle-system="preset: snow; particleCound: 5000;"
        position={{ x: 0, y: 2.25, z: -15 }}
      />
      <Entity>
        <Modal
          visible
          id="modal__404"
          title="404, not found!"
          actionText="Back"
          to="#"
          content={['The scene you are looking for does not exist.',
            'We\'re so sorry! We\'ll notice this in our analytics, and',
            'resolve the issue :) Thanks for exploring our VR scenes!'].join(' ')}
          image={require('../../assets/images/404-cuteness.jpg')}
        />
      </Entity>
    </Entity>
  ),
};

export default NoMatch;

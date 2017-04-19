/**
 * @file NoMatch.jsx
 * This may be the first WebVR 404 experience ever created 🕶 😰.
 */

import { Entity } from 'aframe-react';
import React from 'react';

import Modal from '../Modal.jsx';

/**
 * Returns React component that render's a 404 Not Found scene.
 * {@inheritdoc}
 */
const NoMatch = {
  name: 'no-match',
  sky: require('../../assets/images/scenes/no-match.png'),
  scene: () => (
    <Entity>
      <Entity
        primitive="a-sound"
        src={`src: url(${require('../../assets/sounds/404-ambient.mp3')})`}
        position={{ x: 1, y: 1, z: -5 }}
        autoplay
      />
      <Modal
        visible
        id="modal__404"
        title="404: Not Found In This Reality"
        to="#"
        position={{ x: 1, y: 1, z: -5 }}
        content="The possibilities for WebVR are infinite, but this scene
        hasn't been built yet. Go back to where you were and keep exploring!"
        image={require('../../assets/images/png/404-lego.png')}
      />
    </Entity>
  ),
};

export default NoMatch;

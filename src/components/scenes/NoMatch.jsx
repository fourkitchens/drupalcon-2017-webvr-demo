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
      <Entity
        id="text__no-match"
        position="12 20 -30"
        font="roboto"
        text={{
          value: 'We found nothing for this path :(',
          color: '#000000',
          width: 65,
          font: 'roboto',
        }}
      />

      <Modal
        title="Hey, how are you doing?"
        content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed consequat tortor congue quam sollicitudin sagittis.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra,
        per inceptos himenaeos.`}
        to="#"
      />

      <Link to="#" position={{ x: 20, y: 0, z: -10 }} />

      <Sound mp3={require('../../assets/sounds/can-open.mp3')} position={{ x: -20, y: 0, z: -10 }} />
    </Entity>
  ),
};

export default NoMatch;

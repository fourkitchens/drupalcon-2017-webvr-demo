/**
 * @file NoMatch.jsx
 * This may be the first WebVR 404 experience ever created 🕶 😰.
 */

import { Entity } from 'aframe-react';
import React from 'react';

import Link from '../Link.jsx';
import SoundHotspot from '../SoundHotspot.jsx';
import Modal from '../Modal.jsx';

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

      <SoundHotspot mp3={require('../../assets/sounds/can-open.mp3')} />
      <Link to="#" />
      <Modal
        title="This is a wonderful modal!"
        content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed consequat tortor congue quam sollicitudin sagittis.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra,
        per inceptos himenaeos.`}
        to="#"
      />


    </Entity>
  ),
};

export default NoMatch;

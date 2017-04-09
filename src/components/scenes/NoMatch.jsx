/**
 * @file NoMatch.jsx
 * This may be the first WebVR 404 experience ever created 🕶 😰.
 */

import { Entity } from 'aframe-react';
import React from 'react';

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
    </Entity>
  ),
};

export default NoMatch;

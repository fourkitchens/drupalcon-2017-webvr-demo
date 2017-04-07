/**
 * @file NoMatch.jsx
 * This may be the first WebVR 404 experience ever created 🕶 😰.
 */

import { Entity } from 'aframe-react';
import React from 'react';

import Scene from '../Scene.jsx';
import Link from '../Link.jsx';

/**
 * Returns React component that render's Suzy Bate's initial scene.
 * {@inheritdoc}
 */
const NoMatch = () => (
  <Scene>
    <Entity primative="a-assets">
      <img id="sky" src={require('../../assets/images/no-match.png')} />
    </Entity>

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

    <Link to="/suzy/one" />
    <Entity primitive="a-sky" src="#sky" />
  </Scene>
);

export default NoMatch;

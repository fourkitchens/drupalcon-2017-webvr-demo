/**
 * @file Link.jsx
 * Exports a Link hotspot component.
 */

import React, { PropTypes } from 'react';
import ReactGA from 'react-ga';

require('aframe-look-at-component');

/**
 * Link hot spot that, when clicked, navigates the user to a different scene.
 */
const Link = props => (
  <a-circle
    onClick={() => {
      ReactGA.event({
        category: 'Hotspot',
        action: 'Clicked Link',
        label: props.to,
      });
      window.location.hash = props.to;
    }}
    {...props}
    position={`${props.position.x} ${props.position.y} ${props.position.z}`}
    look-at="#camera"
  />
);

Link.propTypes = {
  color: PropTypes.string,
  id: PropTypes.string,
  to: PropTypes.string,
  src: PropTypes.string,
  position: PropTypes.shape({
    x: PropTypes.integer,
    y: PropTypes.integer,
    z: PropTypes.integer,
  }),
};

Link.defaultProps = {
  color: '#FFFFFF',
  id: 'hotspot',
  to: '#',
  position: { x: 0, y: 0, z: -10 },
  src: require('../assets/images/png/steps.png'),
};

export default Link;

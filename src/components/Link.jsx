/**
 * @file Link.jsx
 * Exports a Link hotspot component.
 */

import React, { PropTypes } from 'react';

require('aframe-look-at-component');

/**
 * Link hot spot that, when clicked, navigates the user to a different scene.
 */
const Link = props => (
  <a-circle
    onClick={() => {
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
  color: '#35AA4E',
  id: 'hotspot',
  to: '#',
  position: { x: 0, y: 0, z: -10 },
  src: require('../assets/images/visit-link.png'),
};

export default Link;

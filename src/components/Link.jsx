/**
 * @file Link.jsx
 * Exports a Link hotspot component.
 */

import React from 'react';

/**
 * Link hot spot that, when clicked, navigates the user to a different scene.
 */
const Link = props => (
  <a-box
    onClick={() => {
      window.location.hash = props.to;
    }}
    {...props}
  />
);

Link.propTypes = {
  color: React.PropTypes.string,
  id: React.PropTypes.string,
  to: React.PropTypes.string,
  position: React.PropTypes.string,
  src: React.PropTypes.string,
};

Link.defaultProps = {
  color: '#35AA4E',
  id: 'hotspot',
  to: '#',
  position: '0 0 -10',
  src: require('../assets/images/visit-link.png'),
};

export default Link;

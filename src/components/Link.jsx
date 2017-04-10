/**
 * @file Link.jsx
 * Exports a Link hotspot component.
 */

import React from 'react';

/**
 * Link hot spot that, when clicked, navigates the user to a different scene.
 */
const Link = props => (
  <a-circle
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
  radius: React.PropTypes.number,
};

Link.defaultProps = {
  color: '#35AA4E',
  id: 'hotspot',
  to: '#',
  position: '0 0 -10',
  radius: 1,
};

export default Link;

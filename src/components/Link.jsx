/**
 * @file Link.jsx
 * Exports a Link hotspot component.
 */

import React, { PropTypes } from 'react';

/**
 * Link hot spot that, when clicked, navigates the user to a different scene.
 */
const Link = (props, context) => {
  const { history } = context.router;
  return (
    <a-circle
      {...props}
      radius="1"
      position="0 0 -10"
      onClick={() => {
        document.querySelector('a-scene').exitVR();
        history.push(props.to);
      }}
    />
  );
};

Link.propTypes = {
  color: React.PropTypes.string,
  id: React.PropTypes.string,
  to: React.PropTypes.string,
};

Link.defaultProps = {
  color: '#35AA4E',
  id: 'hotspot',
  to: '/',
};

Link.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }),
};

export default Link;

/**
 * @file Link.jsx
 * Exports a Link hotspot component.
 */

import React, { PropTypes } from 'react';
import { Entity } from 'aframe-react';
import ReactGA from 'react-ga';

require('aframe-look-at-component');

/**
 * Link hot spot that, when clicked, navigates the user to a different scene.
 */
const Link = ({ id, title, to, color, position: { x, y, z }, src }) => (
  <a-circle
    id={id}
    color={color}
    src={src}
    onClick={() => {
      ReactGA.event({
        category: 'Hotspot',
        action: 'Clicked Link',
        label: to,
      });
      window.location.hash = to;
    }}
    position={`${x} ${y} ${z}`}
    look-at="#camera"
  >
    <Entity
      id={`${id}--label`}
      scale={{ x: 0.6, y: 0.6, z: 0.6 }}
      position={{ x: 0, y: -2, z: 0 }}
      geometry={{
        primitive: 'plane',
        width: 'auto',
        height: 2.5,
      }}
      material={{
        color: '#000000',
        transparent: true,
        opacity: 0.5,
      }}
      text={{
        color: '#FFFFFF',
        align: 'center',
        value: title,
        width: title.length,
        wrapCount: title.length,
        zOffset: 1,
      }}
    />
  </a-circle>
);

Link.propTypes = {
  color: PropTypes.string,
  id: PropTypes.string,
  to: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
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
  src: require('../assets/images/jpg/steps.jpg'),
  title: 'Please specify a title',
};

export default Link;

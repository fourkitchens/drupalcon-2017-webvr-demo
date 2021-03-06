/**
 * @file Sound.jsx
 * Exports a Sound hotspot component.
 */

import React, { PropTypes } from 'react';
import ReactGA from 'react-ga';

require('aframe-look-at-component');

/**
 * Sound hotspot that, when clicked, plays a sound.
 */
const Sound = props => (
  <a-circle
    sound={`src: url(${props.mp3}); on: click; volume: ${props.volume};`}
    {...props}
    position={`${props.position.x} ${props.position.y} ${props.position.z}`}
    look-at="#camera"
    onClick={() => {
      ReactGA.event({
        category: 'Hotspot',
        action: 'Played Sound',
        label: `${props.id}`,
      });
    }}
  />
);

Sound.propTypes = {
  id: PropTypes.string,
  mp3: PropTypes.string.isRequired,
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  depth: PropTypes.number,
  volume: PropTypes.number,
  position: PropTypes.shape({
    x: PropTypes.integer,
    y: PropTypes.integer,
    z: PropTypes.integer,
  }),
};

Sound.defaultProps = {
  id: 'sound-hotspot',
  src: require('../assets/images/jpg/unmute.jpg'),
  position: { x: 10, y: 0, z: -10 },
  width: 1,
  height: 1,
  depth: 0,
  volume: 10,
};

export default Sound;

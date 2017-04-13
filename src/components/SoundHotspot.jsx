/**
 * @file SoundHotspot.jsx
 * Exports a SoundHotspot component.
 */

import React, { PropTypes } from 'react';

/**
 * SoundHotspot that, when clicked, plays a sound.
 */
const SoundHotspot = props => (
  <a-box
    sound={`src: url(${props.mp3}); on: click`}
    {...props}
    position={`${props.position.x} ${props.position.y} ${props.position.z}`}
    rotation={`${props.rotation.x} ${props.rotation.y} ${props.rotation.z}`}
  />
);

SoundHotspot.propTypes = {
  id: PropTypes.string,
  mp3: PropTypes.string.isRequired,
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  depth: PropTypes.number,
  position: PropTypes.shape({
    x: PropTypes.integer,
    y: PropTypes.integer,
    z: PropTypes.integer,
  }),
  rotation: PropTypes.shape({
    x: PropTypes.integer,
    y: PropTypes.integer,
    z: PropTypes.integer,
  }),
};

SoundHotspot.defaultProps = {
  id: 'sound-hotspot',
  src: require('../assets/images/play-sound.png'),
  position: { x: 10, y: 0, z: -10 },
  rotation: { x: 0, y: 0, z: 0 },
  width: 1,
  height: 1,
  depth: 0,
};

export default SoundHotspot;

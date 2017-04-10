/**
 * @file SoundHotspot.jsx
 * Exports a SoundHotspot component.
 */

import React, { PropTypes } from 'react';
import { Entity } from 'aframe-react';

/**
 * SoundHotspot that, when clicked, plays a sound.
 */
const SoundHotspot = props =>
  (<Entity
    {...props}
    id={props.id}
    geometry={{ primitive: 'box' }}
    material={{ src: props.image }}
    sound={`src: url(${props.mp3}); on: click`}
    position={{ x: -10, y: 0, z: 0 }}
  />);

SoundHotspot.propTypes = {
  id: React.PropTypes.string,
  mp3: React.PropTypes.string.isRequired,
  image: React.PropTypes.string,
  position: PropTypes.shape({
    x: React.PropTypes.integer,
    y: React.PropTypes.integer,
    z: React.PropTypes.integer,
  }),
};

SoundHotspot.defaultProps = {
  id: 'sound-hotspot',
  image: require('../assets/images/play-sound.png'),
  position: { x: -10, y: 0, z: 0 },
};

export default SoundHotspot;

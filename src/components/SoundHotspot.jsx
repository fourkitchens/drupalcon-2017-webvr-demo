/**
 * @file SoundHotspot.jsx
 * Exports a SoundHotspot component.
 */

import React from 'react';

/**
 * SoundHotspot that, when clicked, plays a sound.
 */
const SoundHotspot = props =>
  (<a-entity
    id={props.id}
    geometry="primitive: box"
    material={`src: ${props.image}`}
    sound={`src: url(${props.mp3}); on: click`}
    position="-10 0 0"
  />);

SoundHotspot.propTypes = {
  id: React.PropTypes.string,
  mp3: React.PropTypes.string.isRequired,
  image: React.PropTypes.string,
};

SoundHotspot.defaultProps = {
  id: 'sound-hotspot',
  image: require('../assets/images/play-sound.png'),
};

export default SoundHotspot;

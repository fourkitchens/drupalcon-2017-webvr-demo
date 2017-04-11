/**
 * @file SoundHotspot.jsx
 * Exports a SoundHotspot component.
 */

import React from 'react';

/**
 * SoundHotspot that, when clicked, plays a sound.
 */
const SoundHotspot = props => (
  <a-box
    sound={`src: url(${props.mp3}); on: click`}
    {...props}
  />
);

SoundHotspot.propTypes = {
  id: React.PropTypes.string,
  mp3: React.PropTypes.string.isRequired,
  src: React.PropTypes.string,
  position: React.PropTypes.string,
  rotation: React.PropTypes.string,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  depth: React.PropTypes.number,
};

SoundHotspot.defaultProps = {
  id: 'sound-hotspot',
  src: require('../assets/images/play-sound.png'),
  position: '-10 0 0',
  rotation: '0 80 0',
  width: 1,
  height: 1,
  depth: 0,
};

export default SoundHotspot;

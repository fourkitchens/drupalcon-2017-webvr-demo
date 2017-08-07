/**
 * @file Camera.jsx
 * Exports camera component.
 */

import { Entity } from 'aframe-react';
import React, { Component, PropTypes } from 'react';

require('aframe-mouse-cursor-component');

/**
 * Returns React component containing cursor and Camera.
 * {@inheritdoc}
 */
class Camera extends Component {
  /**
   * {@inheretDoc}
   */
  constructor(props) {
    super(props);
    this.state = {
      gamepad: null,
    };
  }

  componentDidMount() {
    window.addEventListener('gamepadconnected', (e) => {
      this.setState({ gamepad: e.gamepad.id });
    });

    window.addEventListener('gamepaddisconnected', () => {
      this.setState({ gamepad: null });
    });
  }

  render() {
    let cursor;

    // If this is a mobile device and a headset is not connected, make sure a
    // fuse-based cursor raycaster appears.
    if (AFRAME.utils.device.isMobile() && this.state.gamepad === null) {
      cursor = (
        <a-entity
          cursor="fuseTimeout: 500"
          position="0 0 -1"
          geometry="primitive: ring; radiusInner: 0.01; radiusOuter: 0.02"
          material="color: white; shader: flat"
        >
          <a-animation
            begin="click"
            attribute="material.color"
            from="white"
            to="grey"
            direction="alternate"
            repeat="1"
            dur="300"
          />
        </a-entity>
      );
    }

    return (
      <Entity
        id="camera"
        mouse-cursor={!AFRAME.utils.device.checkHeadsetConnected()}
        camera
        look-controls
        rotation={this.props.rotation}
      >
        {cursor}
      </Entity>
    );
  }
}

Camera.propTypes = {
  rotation: PropTypes.shape({
    x: PropTypes.integer,
    y: PropTypes.integer,
    z: PropTypes.integer,
  }),
};

Camera.defaultProps = {
  rotation: { x: 0, y: 0, z: -10 },
};

export default Camera;

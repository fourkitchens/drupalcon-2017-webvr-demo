/**
 * @file Modal.jsx
 * Exports a Modal component
 */

import React from 'react';
import { Entity } from 'aframe-react';

/**
 * Modal hot spot that can be presented and then dismissed.
 */
class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: { x: 0, y: 0, z: -1 },
    };
  }

  componentDidMount() {
    this.positionModal();
  }

  positionModal() {
    const p = document.getElementById('camera').object3D.rotation;
    this.setState({
      position: {
        x: p.x,
        y: p.y,
      },
    });
  }

  render() {
    return (
      <Entity
        primitive="a-box"
        width="1"
        height="0.5"
        position={this.state.position}
        background="#ffffff"
      />
    );
  }
}

export default Modal;

/**
 * @file Modal.jsx
 * Exports a Modal component
 */

import React, { PropTypes } from 'react';
import { Entity } from 'aframe-react';

/**
 * Modal hot spot that can be presented and then dismissed.
 */
class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: { x: 0, y: 0, z: -1 },
      visible: true,
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

  toggleVisibility() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <Entity position={this.state.position}>
        <a-circle
          radius="0.05"
          position="0.45 0.22 0.1"
          src={require('../assets/images/close-entity.png')}
          onClick={() => this.toggleVisibility()}
        />
        <Entity
          primitive="a-box"
          visible={this.state.visible || false}
          depth="0"
          width="1"
          height="0.5"
        >
          <a-circle
            radius="0.05"
            position="0.45 0.22 0.1"
            src={require('../assets/images/close-entity.png')}
            onClick={() => this.toggleVisibility()}
          />
          <Entity
            primitive="a-text"
            color="#000000"
            value={this.props.title}
            width="1"
            height="0.5"
            position="-0.48 0.2 0"
          />
          <Entity
            primitive="a-text"
            color="#000000"
            value={this.props.content}
            width="1"
            height="0.5"
            position="-0.48 -0.05 0"
          />
        </Entity>
      </Entity>
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

Modal.defaultProps = {
  title: 'Please give me a title :)',
  content: 'Please give me some content :)',
};

export default Modal;

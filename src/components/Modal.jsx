/**
 * @file Modal.jsx
 * Exports a Modal component
 */

import React, { PropTypes } from 'react';
import { Entity } from 'aframe-react';

/**
 * @class
 * @classdesc Modal hot spot that can be presented and then dismissed.
 */
class Modal extends React.Component {
  /**
   * Constructs this component's state.
   */
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      hotspotSrc: require('../assets/images/visit-link.png'),
    };
  }

  /**
   * Toggles the visibility of the modal attached to the hot spot.
   */
  toggleVisibility() {
    let src = require('../assets/images/visit-link.png');
    if (this.state.visible === false) {
      src = require('../assets/images/close-entity.png');
    }

    this.setState({
      visible: !this.state.visible,
      hotspotSrc: src,
    });
  }

  /**
   * Renders this component.
   */
  render() {
    return (
      <Entity
        id={this.props.id}
        position={`${this.props.position.x} ${this.props.position.y} ${this.props.position.z}`}
      >
        <a-circle
          id={`${this.props.id}-hotspot`}
          radius="0.3"
          position="2 1 0.1"
          src={this.state.hotspotSrc}
          onClick={() => this.toggleVisibility()}
        />
        <Entity
          id={`${this.props.id}-box`}
          primitive="a-box"
          visible={this.state.visible || false}
          depth="0"
          width="4"
          height="2"
        >
          <Entity
            id={`${this.props.id}-title`}
            primitive="a-text"
            color="#000000"
            value={this.props.title}
            width="5.5"
            height="2"
            position="-1.8 0.7 0.1"
          />
          <Entity
            id={`${this.props.id}-content`}
            primitive="a-text"
            color="#000000"
            value={this.props.content}
            width="3.8"
            height="2"
            position="-1.8 -0.1 0.1"
          />
        </Entity>
      </Entity>
    );
  }
}

Modal.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  position: PropTypes.shape({
    x: PropTypes.integer,
    y: PropTypes.integer,
    z: PropTypes.integer,
  }),
};

Modal.defaultProps = {
  title: 'Please give me a title :)',
  content: 'Please give me some content :)',
  position: { x: 0, y: 0, z: -10 },
  id: 'modal__generic',
};

export default Modal;

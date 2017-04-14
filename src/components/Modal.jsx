/**
 * @file Modal.jsx
 * Exports a Modal component
 */

import React, { PropTypes } from 'react';
import { Entity } from 'aframe-react';

require('aframe-look-at-component');

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
      visible: this.props.visible,
      height: 2,
      width: 4,
      textOffset: -1.1,
      hotspotSrc: require('../assets/images/visit-link.jpg'),
    };

    if (props.image.length > 0) {
      this.state.textOffset = -2;
      this.state.height = 3;
    }
  }

  /**
   * Toggles the visibility of the modal attached to the hot spot.
   */
  toggleVisibility() {
    let src = require('../assets/images/visit-link.jpg');
    if (this.state.visible === false) {
      src = require('../assets/images/close-entity.jpg');
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
    const Image = () => {
      if (this.props.image.length <= 0) {
        return (<div />);
      }

      return (
        <Entity
          primitive="a-image"
          src={this.props.image}
          width={this.state.width}
          height="2"
          position={{ x: 0, y: (this.state.height / 2), z: 0.1 }}
        />
      );
    };

    return (
      <Entity
        id={this.props.id}
        position={`${this.props.position.x} ${this.props.position.y} ${this.props.position.z}`}
        look-at="#camera"
      >
        <a-circle
          id={`${this.props.id}-hotspot`}
          radius="0.3"
          position="2 1 0.3"
          src={this.state.hotspotSrc}
          color="#FFFFFF"
          onClick={() => this.toggleVisibility()}
        />
        <Entity
          id={`${this.props.id}-box`}
          primitive="a-box"
          visible={this.state.visible || false}
          depth="0"
          width={this.state.width}
          height={this.state.height}
        >
          <Image />
          <Entity
            id={`${this.props.id}-title`}
            primitive="a-text"
            color="#000000"
            value={this.props.title}
            width="5.5"
            height="2"
            position={{
              x: -1.8,
              y: ((this.state.height / 2) + this.state.textOffset + 0.7),
              z: 0.1,
            }}
          />
          <Entity
            id={`${this.props.id}-content`}
            primitive="a-text"
            color="#000000"
            value={this.props.content}
            width="3.5"
            position={{
              x: -1.8,
              y: ((this.state.height / 2) + this.state.textOffset),
              z: 0.1,
            }}
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
  image: PropTypes.string,
  visible: PropTypes.bool,
  position: PropTypes.shape({
    x: PropTypes.integer,
    y: PropTypes.integer,
    z: PropTypes.integer,
  }),
};

Modal.defaultProps = {
  title: 'Please give me a title :)',
  content: 'Please give me some content :)',
  image: '',
  position: { x: 0, y: 0, z: -10 },
  visible: false,
  id: 'modal__generic',
};

export default Modal;

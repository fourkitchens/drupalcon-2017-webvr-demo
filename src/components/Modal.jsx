/**
 * @file Modal.jsx
 * Exports a Modal component
 */

import React, { PropTypes } from 'react';
import { Entity } from 'aframe-react';

require('aframe-look-at-component');
require('aframe-ui-modal-component');

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
    this.setState({
      visible: !this.state.visible,
    });
  }

  /**
   * Handles action button clicks/fuses.
   */
  handleActionButtonClick() {
    if (this.props.to.length > 0) {
      window.location.hash = this.props.to;
    } else {
      this.toggleVisibility();
    }
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
      <Entity id={this.props.id}>
        <a-circle
          id={`${this.props.id}-hotspot`}
          radius="0.3"
          src={require('../assets/images/visit-link.jpg')}
          color="#FFFFFF"
          position={`${this.props.position.x} ${this.props.position.y} ${this.props.position.z}`}
          look-at="#camera"
          onClick={() => this.toggleVisibility()}
        />
        <Entity
          id={`${this.props.id}-box`}
          primitive="a-box"
          ui-modal={`triggerElement: #${this.props.id}-hotspot`}
          visible={this.state.visible || false}
          depth="0.1"
          color="#284760"
          width={this.state.width}
          height={this.state.height}
        >
          <Image />
          <Entity
            id={`${this.props.id}-title`}
            primitive="a-text"
            color="#FFFFFF"
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
            color="#FFFFFF"
            value={this.props.content}
            width="3.5"
            position={{
              x: -1.8,
              y: ((this.state.height / 2) + this.state.textOffset),
              z: 0.1,
            }}
          />
          <a-box
            id={`${this.props.id}-action`}
            color="#284760"
            depth="0.3"
            width="1"
            height="0.5"
            position="1.7 -1.5 0"
            onClick={() => this.handleActionButtonClick()}
          >
            <a-text
              id={`${this.props.id}-action-text`}
              color="#FFFFFF"
              value={this.props.actionText}
              width="3"
              height="0.5"
              onClick={() => this.handleActionButtonClick()}
              position="-0.60 0.38 1.1"
            />
          </a-box>
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
  to: PropTypes.string,
  actionText: PropTypes.string,
  position: PropTypes.shape({
    x: PropTypes.integer,
    y: PropTypes.integer,
    z: PropTypes.integer,
  }),
};

Modal.defaultProps = {
  id: 'modal__generic',
  title: 'Please give me a title :)',
  content: 'Please give me some content :)',
  image: '',
  visible: false,
  to: '',
  actionText: 'Close',
  position: { x: 0, y: 0, z: -10 },
};

export default Modal;

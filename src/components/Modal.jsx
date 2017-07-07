/**
 * @file Modal.jsx
 * Exports a Modal component
 */

import React, { PropTypes } from 'react';
import { Entity } from 'aframe-react';
import ReactGA from 'react-ga';

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
      height: 2.5,
      width: 4,
      textOffset: -1.5,
    };

    // Adjust modal height and text offset if a modal image was provided.
    if (props.image.length > 0) {
      this.state.textOffset = -2;
      this.state.height = 3;
    }
  }

  /**
   * Sets up event listeners and dispatchers for modal-open events.
   */
  componentDidMount() {
    document.addEventListener('click', (e) => {
      if (e.constructor.name === 'CustomEvent') {
        if (e.target.id === `${this.props.id}-hotspot`) {
          this.toggleVisibility(true);
        } else {
          this.setState({ visible: false });
        }
      }
    });
  }

  /**
   * Toggles the visibility of the modal attached to the hot spot.
   *
   * @param {string} visibility
   *   Optional boolean indicating whether or not this should be visible.
   */
  toggleVisibility(visibility) {
    let visible = visibility;
    if (typeof visible === 'undefined') {
      visible = !this.state.visible;
    }

    // Update the state visibility property.
    this.setState({ visible });

    // Track event in Google Analytics.
    const action = visible ? 'closed' : 'opened';
    ReactGA.event({
      category: 'Hotspot',
      action: `${action} Modal`,
      label: this.props.id,
    });
  }

  /**
   * Handles navigation item clicks/fuses.
   */
  navigate() {
    if (this.props.to.length > 0) {
      ReactGA.event({
        category: 'Modal Button',
        action: 'Clicked Modal Button',
        label: this.props.id,
      });
      window.location.hash = this.props.to;
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
      const size = this.state.width / 1.5;
      return (
        <Entity
          primitive="a-image"
          src={this.props.image}
          width={size}
          height={size}
          position={{ x: 0, y: (this.state.height / 2), z: 0.1 }}
        />
      );
    };

    return (
      <Entity id={this.props.id}>
        <a-circle
          id={`${this.props.id}-hotspot`}
          src={require('../assets/images/jpg/info.jpg')}
          color="#FFFFFF"
          position={`${this.props.position.x} ${this.props.position.y} ${this.props.position.z}`}
          look-at="#camera"
        />
        <Entity
          id={`${this.props.id}-box`}
          primitive="a-box"
          ui-modal={`triggerElement: #${this.props.id}-hotspot`}
          visible={this.state.visible || false}
          depth="0.1"
          color="#127218"
          width={this.state.width}
          height={this.state.height}
        >
          <Image />
          <Entity
            id={`${this.props.id}-title`}
            primitive="a-text"
            color="#D7EEDC"
            value={this.props.title}
            width="5.5"
            height="2"
            position={{
              x: -1.8,
              y: ((this.state.height / 2) + this.state.textOffset + 0.35),
              z: 0.1,
            }}
          />
          <Entity
            id={`${this.props.id}-content`}
            primitive="a-text"
            color="#D7EEDC"
            value={this.props.content}
            width="3.5"
            position={{
              x: -1.8,
              y: ((this.state.height / 2.5) + this.state.textOffset),
              z: 0.1,
            }}
          />
          <a-circle
            visible={this.props.to.length > 0 ? 'true' : 'false'}
            id={`${this.props.id}-action`}
            src={require('../assets/images/jpg/steps.jpg')}
            position="0.9 0.5 0.5"
            radius="0.3"
            onClick={() => this.navigate()}
          />
          <a-circle
            id={`${this.props.id}-close`}
            src={require('../assets/images/jpg/x.jpg')}
            position={this.props.image.length > 0 ? '-0.9 0.5 0.5' : '0 0.7 0.5'}
            radius="0.3"
            onClick={() => this.toggleVisibility(false)}
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
  to: PropTypes.string,
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
  position: { x: 0, y: 0, z: -10 },
};

export default Modal;

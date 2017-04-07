/**
 * @file Hotspot.jsx
 * Exports a base Hotspot component.
 */

import { Entity } from 'aframe-react';
import React from 'react';

/**
 * @class
 * @classdesc Abstract class that defines a clickable hotspot.
 */
class Hotspot extends React.Component {
  /**
   * Called when this hotspot has been clicked.
   *
   * This method exists because eventually, we need to registers clicks with
   * external analytics services before delegating the click to it's actual
   * handler method.
   *
   * @param {object} event
   *   Click event that triggered this method call.
   */
  preHandleClick(event) {
    // TODO: Register event with Google Analytics.
    this.onClick(event);
  }

  /**
   * Base method for handling onClick events.
   *
   * @param {object} event
   *   Click event that triggered this method call.
   *
   * Disable eslint, it does not understand the idea of an abstract class.
   */
  /* eslint-disable */
  handleClick(event) {
    // This is an abstract method. It should exist and it should be callable,
    // but subclasses will override this.
    /* eslint-enable */
  }

  /**
   * {@inheritdoc}
   */
  render() {
    return (
      <Entity
        { ...this.props }
        primitive="a-circle"
        color={this.props.color}
        radius="5"
        position="0 0 -10"
        onClick={this.handleClick}
      />
    );
  }
}

Hotspot.propTypes = {
  color: React.PropTypes.string,
};

Hotspot.defaultProps = {
  color: '#000000',
};

export default Hotspot;

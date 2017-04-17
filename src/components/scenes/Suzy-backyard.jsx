/**
 * @file Suzy.jsx
 * This file exports all scenes pertaining to Suzy Bate's workspace.
 */

import { Entity } from 'aframe-react';
import React from 'react';

import Link from '../Link.jsx';
import Sound from '../Sound.jsx';
import Modal from '../Modal.jsx';

/**
 * Returns React component that render's Suzy Bate's initial scene.
 */
const SuzyOne = {
  name: 'suzy-backyard',
  sky: require('../../assets/images/scenes/suzy-back-yard.jpg'),
  scene: () => (
    <Entity>
      <Entity
        id="4k-logo"
        primitive="a-collada-model"
        scale="100 100 100"
        position={{ x: -5.15, y: -0.75, z: -14.80 }}
        src={`src: url(${require('../../assets/3d/logo.dae')})`}
      />
      <Entity
        primitive="a-text"
        scale="4 4 4"
        color="#D2D2D2"
        position={{ x: 1.74, y: 0.03, z: -11.73 }}
        wrap-count="30"
        value="Web Chefs At Work & Play \n
          A WebVR Jaunt by \n
          Four Kitchens"
      />
      <Entity
        primitive="a-sound"
        src={`src: url(${require('../../assets/sounds/neighborhood-birds-ambient.mp3')})`}
        position={{ x: 1, y: 1, z: -5 }}
        autoplay
      />
      <Modal
        id="modal__office"
        title="Welcome to the Shedquarters!"
        position={{ x: 24, y: 0, z: -4 }}
        content="Lets take a tour of Suzy's wicked setup!"
        to="suzy-office"
        actionText="Office"
        image={require('../../assets/images/modal-placeholder.jpg')}
      />
      <Sound id="sound-joke-2" mp3={require('../../assets/sounds/sound-placeholder.mp3')} position={{ x: 22, y: -3, z: 18 }} />
      <Link id="hotspot-house-3" to={'suzy-house'} position={{ x: -16, y: 3, z: 21.5 }} />
      <Modal
        id="modal__treehouse"
        title="Look at these g8 folks!"
        actionText="Wow!"
        position={{ x: -17, y: 19, z: -11 }}
        content="These fine people stay strong all winter by eating nachos."
        image={require('../../assets/images/modal-placeholder.jpg')}
      />
      <Sound id="sound-some-webchefs-5" mp3={require('../../assets/sounds/sound-placeholder.mp3')} position={{ x: 22, y: -1.5, z: -9 }} />
    </Entity>
  ),
};

export default SuzyOne;

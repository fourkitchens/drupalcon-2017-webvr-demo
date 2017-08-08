/**
 * @file Mike-workshop.jsx
 * This file exports all scenes pertaining to Mike's workspace.
 */

import { Entity } from 'aframe-react';
import React from 'react';

import Link from '../Link.jsx';
import Sound from '../Sound.jsx';
import Modal from '../Modal.jsx';

require('aframe-look-at-component');

/**
 * Returns React component that render's Mike's initial scene.
 */
const MikeWorkshop = {
  name: 'mike-workshop',
  sky: require('../../assets/images/scenes/mike-workshop.jpg'),
  scene: () => (
    <Entity id="workshop__wrapper">
      <Entity
        id="workshop__sound"
        primitive="a-sound"
        src={`src: url(${require('../../assets/sounds/mike-saw.mp3')})`}
        position={{ x: 6.94, y: -7.98, z: -16.98 }}
        volume={10}
        autoplay
      />
      <Entity
        id="welcome__wrapper"
        rotation={{ x: 0, y: -26.76, z: 0 }}
        position={{ x: 6.88, y: 0, z: -11.46 }}
        scale={{ x: 1, y: 1, z: 1 }}
      >
        <Entity
          id="welcome__logo"
          primitive="a-collada-model"
          scale="30 30 30"
          src={`src: url(${require('../../assets/3d/logo.dae')})`}
          position={{ x: 4.4, y: 2, z: 0 }}
        />
        <Entity
          primitive="a-text"
          id="welcome__title"
          scale="3 3 3"
          color="#FFFFFF"
          wrap-count="30"
          value="Working with the Web Chefs"
          position={{ x: 0, y: 0.6, z: 0 }}
        />
        <Entity
          primitive="a-text"
          id="welcome__text"
          scale="3 3 3"
          color="#FFFFFF"
          background="#000000"
          wrap-count="42"
          line-height="50"
          value="Explore life in WebVR with two of Four Kitchens' best!"
          position={{ x: -1.8, y: -0.5, z: 0 }}
        />
      </Entity>
      <Modal
        id="modal__mikebio"
        title="Meet Mike Minecki!"
        position={{ x: 22.93, y: -7.96, z: -2.97 }}
        content=" - Director of Technology \n - Thinker and maker extraordinaire
        \n- Lego maniac \n - Political refugee from Poland!"
        image={require('../../assets/images/png/mike-bio.png')}
      />
      <Modal
        id="modal__slinky"
        title="All Kinds of Jigs"
        position={{ x: -15.09, y: -3.77, z: 8.68 }}
        content='Some jigs are for cutting, some are for dancing. Mike uses his
        wall of tools and various jigs to cut all kinds of things, like the "4K"
        kegerator taps, or this wooden icon for JAM On It productions,
        because Mike is an o.g. raver kid 5ever.'
        image={require('../../assets/images/png/mike-tools.png')}
      />
      <Modal
        id="modal__prints"
        title="Meet Jan Lebenstein"
        position={{ x: 20.93, y: -4.74, z: 8.38 }}
        content="Mike's Grand Uncle Jan is a famous Polish artist. He gave Mike
        these two prints of his work, currently worth over $10,000. \n \n
        Get a damn frame, Mike!"
        image={require('../../assets/images/png/mike-prints.png')}
      />
      <Modal
        id="modal__hackers"
        title="Building Robots with Kids"
        position={{ x: 6.88, y: -10.57, z: -6.29 }}
        content="For the last couple of years, Mike has been spending his Sunday
        afternoons building robots with kids. Other Drupal-ers -- like Joanna
        Gaines, Rob Ristroph, and Schnitzel -- are part of the group, too!"
        image={require('../../assets/images/png/mike-robots.png')}
      />
      <Sound
        id="sound__saw"
        mp3={require('../../assets/sounds/mike-saw.mp3')}
        position={{ x: 6.94, y: -7.98, z: -16.98 }}
      />
      <Link
        id="link__mike-office"
        to="mike-office"
        position={{ x: 14.50, y: -1.92, z: 16.32 }}
      />
    </Entity>
  ),
};

export default MikeWorkshop;

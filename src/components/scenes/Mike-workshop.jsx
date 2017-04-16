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
const MikeWorkshop = {
  name: 'mike-workshop',
  sky: require('../../assets/images/scenes/mike-workshop.jpg'),
  scene: () => (
    <Entity>
      <Entity
        primitive="a-sound"
        src={`src: url(${require('../../assets/sounds/table-saw.mp3')})`}
        position={{ x: 6.94, y: -7.98, z: -16.98 }}
        autoplay
      />
      <Modal
        id="modal__jigs"
        title="Jigs aren't just for dancing"
        position={{ x: 4.56, y: 0.94, z: -18.38 }}
        content={['This whole wall is full of different table saw jigs, or devices to hold work and guide tools. He made the one on the left so he could make tapered beer taps for Four Kitchens.'].join(' ')}
        image={require('../../assets/images/modal-placeholder.jpg')}
      />
      <Modal
        id="modal__slinky"
        title="Jigs aren't just for dancing, but raves are"
        position={{ x: -15.09, y: -3.77, z: 8.68 }}
        content={['Mike spent most of his 20s throwing underground all night dance events. You might judge him for it, but he doesn\'t care because most of his raver friends are leaders in thier fields and super successful.'].join(' ')}
        image={require('../../assets/images/modal-placeholder.jpg')}
      />
      <Modal
        id="modal__bike"
        title="Mike rides his bike."
        position={{ x: 11.16, y: -3.00, z: -15.72 }}
        content={['Not all of Mike\'s hobbies keep him out of the sun. He an avid road cyclist. The farthest he\'s biked in one day is 120 miles. An ex-webchef made this super cool illustration of him.'].join(' ')}
        image={require('../../assets/images/modal-placeholder.jpg')}
      />
      <Modal
        id="modal__joiner"
        title="This the most expensive tool in the shop."
        position={{ x: 14.27, y: -20.73, z: 9.59 }}
        content={['With a table saw, a chop saw and a drill press you\'d think it would be a power tool.'].join(' ')}
        image={require('../../assets/images/modal-placeholder.jpg')}
      />
      <Modal
        id="modal__prints"
        title="Mike comes from good stock."
        position={{ x: 20.93, y: -4.74, z: 8.38 }}
        content={['These prints are by Mike\'s grand uncle Jan Lebenstein. Jan defected from communist Poland when we recieved the the Grand Prix at the 1st Biennale of Youth in Paris. He spent his life there, because communisim sucks.'].join(' ')}
        image={require('../../assets/images/modal-placeholder.jpg')}
      />
      <Modal
        id="modal__hackers"
        title="Mike builds robots with kids."
        position={{ x: 6.88, y: -10.57, z: -6.29 }}
        content={['At Drupalcon Amsterdam Johanna Bergmann asked Mike to help her teach her son and his friends how to build robots. He was drunk so he said yes. Two years later its one of the best decisions of his life. Do you think Mike should make more life choices when sloshed?'].join(' ')}
        image={require('../../assets/images/modal-placeholder.jpg')}
      />
      <Modal
        id="modal__uwaga"
        title="This is the laundry room"
        position={{ x: -3.21, y: -1.15, z: 16.69 }}
        content={['The sign says "careful, evil mother-in-law. Mike\'s mom gave it to his wife after they were married for a few years. It would be funny if it wasn\'t so true.'].join(' ')}
        image={require('../../assets/images/modal-placeholder.jpg')}
      />
      <Sound id="sound-table-saw" mp3={require('../../assets/sounds/table-saw.mp3')} position={{ x: 6.94, y: -7.98, z: -16.98 }} />
      <Sound id="sound-joke-2" mp3={require('../../assets/sounds/sound-placeholder.mp3')} position={{ x: -0.51, y: 17.65, z: -8.48 }} />
      <Link id="link__mike-office" to="mike-office" position={{ x: 14.50, y: -1.92, z: 16.32 }} />
    </Entity>
  ),
};

export default MikeWorkshop;

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
const SuzyTwo = {
  name: 'suzy-office',
  sky: require('../../assets/images/scenes/suzy-office.jpg'),
  scene: () => (
    <Entity>
      <Modal
        id="modal__badges"
        title="The Web Chefs travel a lot."
        position={{ x: 11, y: 0.77, z: -17.86 }}
        content={['Web Chefs travel a lot! Suzy has collected these badges over',
          'the past few years. She will grow her collection as she continues',
          'to attend and present at events in coming years.'].join(' ')}
        image={require('../../assets/images/modal-placeholder.jpg')}
      />
      <Modal
        id="modal__quilt"
        title="Web Chefs have hobbies"
        position={{ x: 21.57, y: -7.16, z: -6.91 }}
        content={['When she\'s not piecing together a web project, Suzy makes',
          'quilts. She is a very skilled quilt-builder. Doug, help me :D'].join(' ')}
        image={require('../../assets/images/modal-placeholder.jpg')}
      />
      <Sound click-drag id="sound__sewing" mp3={require('../../assets/sounds/sewing-machine.mp3')} position={{ x: 18.31x, y: -8.84, z: 20.61 }} />
      <Modal
        id="modal__thread"
        title="Every thread tells a story."
        position={{ x: 4.24, y: 0.62, z: 19.42 }}
        content={['Spools of thread are kind of like life. Kinda long but you',
          'run out eventually.'].join(' ')}
        image={require('../../assets/images/modal-placeholder.jpg')}
      />
      <Modal
        id="modal__computer"
        title="Hey, I'm workin here!"
        position={{ x: -13.9, y: -3.05, z: 6.48 }}
        content={['Suzy wears a lot of hats at Four Kitchens. As the director of',
          'project management, Suzy does a lot of amazing work that is crucial',
          'to Four Kitchens as a team and a company.'].join(' ')}
        image={require('../../assets/images/modal-placeholder.jpg')}
      />
      <Sound id="sound-joke-2" mp3={require('../../assets/sounds/sound-placeholder.mp3')} position={{ x: -0.51, y: 17.65, z: -8.48 }} />
      <Link id="hotspot-yard-6" to="suzy-backyard" position={{ x: 0.86, y: -7.10, z: -17.73 }} />
    </Entity>
  ),
};

export default SuzyTwo;

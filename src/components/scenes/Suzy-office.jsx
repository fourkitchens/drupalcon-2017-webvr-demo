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
        content="Suzy and the other Web Chefs travel to conferences and meetups
        all over the country. Stay on the lookout for our green track
        jackets — with 4K patches sewn by Suzy!"
        image={require('../../assets/images/png/suzy-badges.png')}
      />
      <Modal
        id="modal__quilt"
        title="Maker Spirit"
        position={{ x: 21.57, y: -7.16, z: -6.91 }}
        content="When she's not piecing together a web project, Suzy makes
        quilts. She's creating this one for her parents, as a 50th
        wedding anniversary gift. Shh! It's supposed to be a surprise!"
        image={require('../../assets/images/png/suzy-quilt.png')}
      />
      <Sound id="sound__sewing" mp3={require('../../assets/sounds/suzy-sewing-machine.mp3')} position={{ x: 18.31, y: -8.84, z: 20.61 }} />
      <Modal
        id="modal__thread"
        title="Every thread tells a story..."
        position={{ x: 4.24, y: 0.62, z: 19.42 }}
        content="What's yours? Have you found all the hotspots in our WebVR
        content playbook? Talk to Doug and Lucy about your experience and we
        might feature you on FourK-TV!"
        image={require('../../assets/images/png/suzy-threads.png')}
      />
      <Sound id="sound__suzy-office-space" mp3={require('../../assets/sounds/suzy-office-space.mp3')} position={{ x: -0.51, y: 17.65, z: -8.48 }} />
      <Link id="link__mike-office" to="mike-office" position={{ x: -13.9, y: -3.05, z: 6.48 }} />
      <Link id="hotspot__backyard" to="suzy-backyard" position={{ x: 0.86, y: -7.10, z: -17.73 }} />
    </Entity>
  ),
};

export default SuzyTwo;

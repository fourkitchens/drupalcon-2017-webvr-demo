/**
 * @file Suzy.jsx
 * This file exports all scenes pertaining to Suzy Bate's workspace.
 */

import { Entity } from 'aframe-react';
import React from 'react';

import Link from '../Link.jsx';
import Modal from '../Modal.jsx';
import Home from '../Home.jsx';

/**
 * Returns React component that render's Suzy Bate's initial scene.
 */
const SuzyOne = {
  name: 'suzy-backyard',
  sky: require('../../assets/images/scenes/suzy-back-yard.jpg'),
  scene: () => (
    <Entity>
      <Entity
        primitive="a-sound"
        src={`src: url(${require('../../assets/sounds/neighborhood-birds-ambient.mp3')})`}
        position={{ x: 1, y: 1, z: -5 }}
        autoplay
        loop
      />
      <Modal
        id="modal__suzybio"
        title="Meet Suzy Bates!"
        position={{ x: 22, y: -1.5, z: -9 }}
        content='- Director of Projects \n - Web Chef since 2012 \n
        - Agile Scrum Master \n - Avid quilter and textile maker \n - Loves the
        "Hamilton" soundtrack'
        image={require('../../assets/images/png/suzy-bio.png')}
      />
      <Modal
        id="modal__office"
        title="Welcome to the Shedquarters!"
        position={{ x: 24.83, y: 1.79, z: 2.6 }}
        content="Suzy's shed is home and office — go inside and look around!"
        to="suzy-office"
        image={require('../../assets/images/png/suzy-shedquarters.png')}
      />
      <Link id="hotspot-house-3" to={'suzy-house'} position={{ x: -16, y: 3, z: 21.5 }} />
      <Modal
        id="modal__treehouse"
        title="Web Chef Club House!"
        position={{ x: -17, y: 19, z: -11 }}
        content='"Hello!" says Doug and Lucy. Four Kitchens makes content go,
        no matter what the context! Make sure to check out the "flat" version
        of this content in the Knowledge section of our website.'
      />
      <Home />
    </Entity>
  ),
};

export default SuzyOne;

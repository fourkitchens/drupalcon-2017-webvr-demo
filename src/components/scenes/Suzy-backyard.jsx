/**
 * @file Suzy.jsx
 * This file exports all scenes pertaining to Suzy Bate's workspace.
 */

import { Entity } from 'aframe-react';
import React from 'react';

import Link from '../Link.jsx';
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
        scale="30 30 30"
        position={{ x: -0.88, y: 2, z: -10 }}
        src={`src: url(${require('../../assets/3d/logo.dae')})`}
      />
      <Entity
        primitive="a-text"
        scale="3 3 3"
        color="#FFFFFF"
        position={{ x: -5.2, y: 0.2, z: -10 }}
        wrap-count="30"
        value="Working with the Web Chefs"
      />
      <Entity
        primitive="a-text"
        scale="3 3 3"
        color="#FFFFFF"
        position={{ x: -5.2, y: -1.5, z: -10 }}
        wrap-count="68"
        line-height="60"
        value="Explore life in WebVR with two of the Four Kitchens Web Chefs. \n
        Look up, look down, look all around you! When you see an \n
        interactive element just keep staring to click and learn more!"
      />
      <Entity
        primitive="a-sound"
        src={`src: url(${require('../../assets/sounds/neighborhood-birds-ambient.mp3')})`}
        position={{ x: 1, y: 1, z: -5 }}
        autoplay
      />
      <Modal
        id="modal__suzybio"
        title="Meet Suzy Bates!"
        position={{ x: 22, y: -1.5, z: -9 }}
        content="- Director of Projects \n - Web Chef since 2012 \n
        - Agile Scrum Master \n - Avid quilter and textile maker \n - Loves the Hamilton soundtrack"
        image={require('../../assets/images/png/suzy-bio.png')}
      />
      <Modal
        id="modal__office"
        title="Welcome to the Shedquarters!"
        position={{ x: 24.83, y: 1.79, z: 2.6 }}
        content="Suzy's shed is home and office — click inside and look around!"
        to="suzy-office"
        image={require('../../assets/images/png/suzy-shedquarters.png')}
      />
      <Link id="hotspot-house-3" to={'suzy-house'} position={{ x: -16, y: 3, z: 21.5 }} />
      <Modal
        id="modal__treehouse"
        title="Web Chef Club House!"
        position={{ x: -17, y: 19, z: -11 }}
        content='"Hello!" says Doug and Lucy — Four Kitchens makes content go,
        no matter what the context! Make sure to check out the "flat" version
        of this content in the Knowledge section of our website.'
      />
    </Entity>
  ),
};

export default SuzyOne;

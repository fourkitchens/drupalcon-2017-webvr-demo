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
const MikeOffice = {
  name: 'mike-office',
  sky: require('../../assets/images/scenes/mike-office.jpg'),
  scene: () => (
    <Entity>
      <Modal
        id="modal__sash"
        title="Wear All The Hats"
        position={{ x: 0.30, y: 3.40, z: -18.83 }}
        content="Mike wears a lot of hats. At Four Kitchens, he wears a DoT hat,
        a project engineer hat, and a fixer-of-broken-things hat. He wears a
        lot of hats in life, too, like the time he wore a Zupan, which is what
        this is—a traditional Polish hat + cloak garment that he wore for his wedding."
        image={require('../../assets/images/png/mike-sash.png')}
      />
      <Modal
        id="modal__games"
        title="Tabletop Champions"
        position={{ x: 21.01, y: -4.43, z: -6.87 }}
        content="A lot of the Web Chefs are gamers, but Mike's collection of
        boardgames, card games, and video games is always an impressive
        conversation starter. But what's that Polish nativity scene doing there?"
        image={require('../../assets/images/png/mike-games.png')}
      />
      <Modal
        id="modal__change"
        title="Change the World"
        position={{ x: 20.20, y: -3.91, z: 10.41 }}
        content=""
        image={require('../../assets/images/png/mike-poster.png')}
      />
      <Sound
        id="sound__starwars"
        mp3={require('../../assets/sounds/mike-lego.mp3')}
        position={{ x: -11.82, y: 5.10, z: -17.68 }}
        volume="50"
      />
      <Modal
        id="modal__mike_computer"
        title=" Call him Mirzu"
        position={{ x: -14.57, y: -6.29, z: 7.59 }}
        content='If you run into Mike online - which you probably will - he
        goes by "Mirzu." His online handle started out as a nonsense joke,
        but over the years it became an identity. If you want to make him
        smile, call him Mirzu instead of Michal.'
      />
      <Modal
        id="modal__suzy-office"
        title="Other Chefs, Other Stories"
        position={{ x: -16.27, y: -5.02, z: -2.50 }}
        content="Four Kitchens is a fully distributed team, but we stay
        connected with tools like Slack and Zoom. Click here to see another
        Web Chef's VR Story!"
        image={require('../../assets/images/png/suzy-desk.png')}
        to="suzy-office"
      />
      <Link
        id="link__mike-workshop"
        to="mike-workshop"
        position={{ x: 20.26, y: -6.87, z: 6.09 }}
      />
    </Entity>
  ),
};

export default MikeOffice;

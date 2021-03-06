/**
 * @file Mike-office.jsx
 * This file exports all scenes pertaining to Mike's office.
 */

import { Entity } from 'aframe-react';
import React from 'react';

import Link from '../Link.jsx';
import Sound from '../Sound.jsx';
import Modal from '../Modal.jsx';

/**
 * Returns React component that render's Mike's office.
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
        content="He wears a lot of hats in life, too. For his wedding, he wore
        this Zupan -- a traditional Polish hat + cloak garment."
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
        title="Change the World..."
        position={{ x: 20.20, y: -3.91, z: 10.41 }}
        image={require('../../assets/images/png/mike-poster.png')}
        content="... by Setting Knowledge Free. This was the 2014 anniversary
        poster for Four Kitchens. In 2014, Mike celebrated his third year as
        a Web Chef. This poster was created by artist Bobby Dixon."
      />
      <Sound
        id="sound__starwars"
        mp3={require('../../assets/sounds/mike-lego.mp3')}
        position={{ x: -11.82, y: 5.10, z: -17.68 }}
      />
      <Modal
        id="modal__mike_computer"
        title=" Call him Mirzu"
        position={{ x: -14.57, y: -6.29, z: 7.59 }}
        content='If you run into Mike online -- which you probably will -- he
        goes by "Mirzu." His online handle started out as a nonsense joke,
        but over the years it became an identity. If you want to make him
        smile, call him Mirzu instead of Michal.'
      />
      <Link
        id="link__suzy-office"
        to="suzy-office"
        position={{ x: -16.27, y: -5.02, z: -2.50 }}
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

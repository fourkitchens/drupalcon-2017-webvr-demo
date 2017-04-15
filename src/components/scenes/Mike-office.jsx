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
        title="Mike wears a lot of hats at Four Kitchens."
        position={{ x: 1.42, y: 4.61, z: -18.53 }}
        content={['Mike wore that silly hat, a polish great coat, called a zupan and this sash at this wedding. The colors, orange and lavender matched his and his wifes wedding colors, respectively.'].join(' ')}
        image={require('../../assets/images/modal-placeholder.jpg')}
      />
      <Modal
        id="modal__flask"
        title="Mirzu isn't just a screen name."
        position={{ x: 1.95, y: -4.25, z: -18.01 }}
        content={['Well it started as a screen name, but everyone he met for a long time met him first online, so all his oldest friends call him mirzu. If you want to make him smile call him that too.'].join(' ')}
        image={require('../../assets/images/modal-placeholder.jpg')}
      />
      <Modal
        id="modal__games"
        title="Mike\'s a little into boardgames."
        position={{ x: 21.86, y: 0.39, z: -6.29 }}
        content={['He\'s got quite a collection and loves hosting friends and family for games. He almost moved them to a different shelf, but noticed that lots of people commented on them when he was on video calls, so he left them as a conversation starter.'].join(' ')}
        image={require('../../assets/images/modal-placeholder.jpg')}
      />
      <Modal
        id="modal__change"
        title="Change the world by setting Knowledge free."
        position={{ x: 20.20, y: -3.91, z: 10.41 }}
        content={['Every year Web Chefs get a custom printed poster to commemorate their tenure. Mike got this poster on his 3rd year. Its pretty neat.'].join(' ')}
        image={require('../../assets/images/modal-placeholder.jpg')}
      />
      <Modal
        id="modal__lego"
        title="Lego + Star Wars, what more could you ask for."
        position={{ x: -11.82, y: 5.10, z: -17.68 }}
        content={['Mike\'s takes Star Wars and Lego really seriously. There\'s about 100 pounds of each in house, and when they combine *Magic*.'].join(' ')}
        image={require('../../assets/images/modal-placeholder.jpg')}
      />
      <Modal
        id="modal__computer_mike"
        title="Mike coding is totally staged"
        position={{ x: -14.92, y: -6.40, z: 6.63 }}
        content={['He loves building stuff, in the virtual world or real world, but his job at 4k is almost all leadership and coordination. Maybe thats why he got seriously into wooodworking after being promoted.'].join(' ')}
        image={require('../../assets/images/modal-placeholder.jpg')}
      />
      <Sound id="sound-wall-e" mp3={require('../../assets/sounds/wall-e_sound.mp3')} position={{ x: -7.77, y: -2.73, z: 13.69 }} />
      <Sound id="sound-joke-2" mp3={require('../../assets/sounds/sound-placeholder.mp3')} position={{ x: -0.51, y: 17.65, z: -8.48 }} />
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

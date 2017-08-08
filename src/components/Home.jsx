/**
 * @file Home.jsx
 * Exports a Home hotspot component.
 */

import React from 'react';
import ReactGA from 'react-ga';

/**
 * Home hotspot provides a home link at the bottom of the screen.
 */
const Home = () => (
  <a-circle
    id="hotspot__home"
    onClick={() => {
      ReactGA.event({
        category: 'Hotspot',
        action: 'Navigated Home',
        label: '/',
      });
      window.location.hash = '';
    }}
    position="0 -8 0"
    src={require('../assets/images/jpg/home.jpg')}
    look-at="#camera"
  />

);

export default Home;

/**
 * @file index.js
 * Entry file for this application.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import aframe from 'aframe'; // eslint-disable-line
import { Scene, Entity } from 'aframe-react';
import ReactGA from 'react-ga';

import Camera from './components/Camera.jsx';
import NoMatch from './components/scenes/NoMatch.jsx';
import SuzyBackyard from './components/scenes/Suzy-backyard.jsx';
import SuzyOffice from './components/scenes/Suzy-office.jsx';
import MikeOffice from './components/scenes/Mike-office.jsx';
import MikeWorkshop from './components/scenes/Mike-workshop.jsx';

ReactGA.initialize('UA-559851-16');

/**
 * Scene that handles navigation.
 * {@inheritdoc}
 */
class NavigationScene extends React.Component {
  /**
   * Constructs this component and defaults state.
   */
  constructor(props) {
    super(props);

    // Collect all scenes into an iterable object.
    this.state = {};
    this.state.scenes = [SuzyBackyard, SuzyOffice, MikeOffice, MikeWorkshop, NoMatch];
    this.state.initialScene = this.fetchSceneByName('mike-workshop');
    this.state.currentScene = this.fetchSceneByUrl();
  }

  /**
   * When the window hash changes, adjust the current scene.
   */
  componentDidMount() {
    window.onhashchange = () => this.switchCurrentScene(this.fetchSceneByUrl());
  }

  /**
   * Fetches the scene object for the given scene ID.
   *
   * @param {string} name
   *   String containing the name of the scene that should returned.
   *
   * @returns {object}
   *   Object with scene data for the specified scene name.
   */
  fetchSceneByName(name) {
    const newScene = this.state.scenes.find(scene => scene.name === name);

    // If no scene was found, return the 404 not found scene.
    if (!newScene) {
      return this.fetchSceneByName('no-match');
    }

    return newScene;
  }

  /**
   * Fetches and return all the image tags needed by every scene.
   *
   * @returns {array}
   *   Array of sky image tags.
   */
  fetchSkys() {
    return this.state.scenes.map(scene => (
      <img key={scene.name} id={scene.name} src={scene.sky} />
    ));
  }

  /**
   * Fetches current scene based on URL
   *
   * @returns {object}
   *   Object with scene data from the name specified in the URL, or 404 if no
   *   scene is found.
   */
  fetchSceneByUrl() {
    let name = window.location.hash.replace('#', '');

    // If the name is empty, the initial scene should be returned.
    if (name.length <= 0) {
      name = this.state.initialScene.name;
    }

    const scene = this.fetchSceneByName(name);

    // If this is a no-match scene, ensure no-match is in the url.
    if (scene.name === 'no-match') {
      window.location.hash = 'no-match';
    }
    ReactGA.pageview(name);

    return scene;
  }

  /**
   * Switches the current scene to another scene.
   *
   * @param {object} scene
   *   Scene object that should become the current scene.
   */
  switchCurrentScene(scene) {
    this.setState({
      currentScene: scene,
    });
  }

  render() {
    return (
      <Scene inspector="url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js">
        <Entity laser-controls position={{ x: 0.3, y: -0.6, z: 0 }} />
        <Entity primative="a-assets">{this.fetchSkys()}</Entity>
        <Entity primitive="a-sky" radius="30" src={`#${this.state.currentScene.name}`} />
        <Camera />
        {this.state.currentScene.scene()}
      </Scene>
    );
  }
}

// Render the NavigationScene component in the scene container div.
ReactDOM.render(<NavigationScene />, document.querySelector('.application-container'));

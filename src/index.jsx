/**
 * @file index.js
 * Entry file for this application.
 */

import 'aframe';
import React from 'react';
import ReactDOM from 'react-dom';
import { Scene, Entity } from 'aframe-react';

import Camera from './components/Camera.jsx';
import NoMatch from './components/scenes/NoMatch.jsx';
import { SuzyOne, SuzyTwo } from './components/scenes/Suzy.jsx';

require('./styles/index.scss');

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
    this.state = {
      currentScene: 'suzy-front-house',
      scenes: [SuzyOne, SuzyTwo, NoMatch],
    };
  }

  /**
   * When the window hash changes, adjust the current scene.
   */
  componentDidMount() {
    window.onhashchange = () => {
      const name = location.hash.replace('#', '');
      this.switchCurrentScene(name);
    };
  }

  /**
   * Fetches the scene object for the given scene ID.
   *
   * @param {string} name
   *   String containing the name of the scene that should returned.
   *
   * @returns {object}
   *   Object with scene data for the specified scene ID.
   */
  fetchScene(name) {
    const newScene = this.state.scenes.find(scene => scene.name === name);

    // If no scene was found, return the 404 not found scene.
    if (!newScene) {
      return { name: 'no-match' };
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
   * Switches the current scene to another scene.
   *
   * @param {string} name
   *   String containing the name of the scene that should be loaded.
   */
  switchCurrentScene(name) {
    const newScene = this.fetchScene(name);
    this.setState({
      currentScene: newScene.name,
    });
  }

  render() {
    return (
      <Scene inspector="url: https://aframe.io/releases/0.3.0/aframe-inspector.min.js">
        <Entity primative="a-assets">{this.fetchSkys()}</Entity>
        <Entity primitive="a-sky" src={`#${this.state.currentScene}`} />
        <Camera />

        {this.fetchScene(this.state.currentScene).scene()}
      </Scene>
    );
  }
}

// Render the NavigationScene component in the scene container div.
ReactDOM.render(<NavigationScene />, document.querySelector('.application-container'));

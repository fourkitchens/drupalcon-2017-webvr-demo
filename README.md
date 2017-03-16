# DrupalCon 2017 WebVR Demo
This repository contains a WebVR app that is intended to be demoed at [DrupalCon 2017](https://events.drupal.org/baltimore2017). This project uses [A-Frame](https://aframe.io/), [React](https://facebook.github.io/react/), and an [A-Frame-React](https://github.com/ngokevin/aframe-react) library, which exposes A-Frame components as a React component.

## Development
### Requirements
* Node.js (version `v7.7.2` or above).
* NPM (version `v4.0.5` or above) or Yarn (version `v0.21.3` or above).

### Installation
* Clone this repository.
* In this repository's root, run `npm i` or `yarn`.

### Coding standards
This project uses Eslint, configured to use AirBnb's standard set. To lint code in this project, run `npm run lint`. As enforced by Husky, you cannot commit code that does not fit the defined standard.

### Development server
This project uses Webpack to generate builds, and set up development instances. To run a development server, run `npm run start`, and then in your browser navigate to `http://localhost:8080`. This server has hot-reloading enabled, so you shouldn't ever need to manually re-fresh your browser.

### Building and Deploying.
As aforementioned, this project uses Webpack to generate builds, and production builds are placed into the `dist` folder. To generate a build, run `npm run build`. 

### Testing
... is still in the works :)

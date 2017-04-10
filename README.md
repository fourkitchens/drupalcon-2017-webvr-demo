# DrupalCon 2017 WebVR Demo
This repository contains a WebVR app that is intended to be demoed at [DrupalCon 2017](https://events.drupal.org/baltimore2017). This project uses [A-Frame](https://aframe.io/), [React](https://facebook.github.io/react/), and an [A-Frame-React](https://github.com/ngokevin/aframe-react) library, which exposes A-Frame components as a React component.

## Development
### Requirements
* Node.js (version `v7.7.2` or above).
* NPM (version `v4.0.5` or above) or Yarn (version `v0.21.3` or above).
* Google Pixel with Chrome Beta installed (it's in the play store).
* Google Daydream.

### Installation
* Clone this repository.
* In this repository's root, run `npm i` or `yarn`.

### Coding standards
This project uses Eslint, configured to use AirBnb's standard set. To lint code in this project, run `npm run lint`. As enforced by Husky, you cannot commit code that does not fit the defined standard.

### Development server
This project uses Webpack to generate builds, and set up development instances. To run a development server, run `npm run start`, and then in your browser navigate to `https://{your_ip_address}:8080`. This server has hot-reloading enabled, so you shouldn't ever need to manually re-fresh your browser. You'll need to tell Chrome or whatever browser you're using that using https with no cert is OK. We need to pretend like we have https set up so that Chrome Beta, while in VR mode, doesn't crash (See the Developing in Google Daydream section).

#### Configuring the development server
The development server in this repository shouldn't need configuration to run correctly, but if you want to run the server on a specific o[ or port, you can set these two environment variables:
```bash
export DEVELOPMENT_SERVER_IP="localhost"
export DEVELOPMENT_SERVER_PORT="3000"
```

#### Developing in Google Daydream
The development server in this project is set up so that it can be accessed by any device on your local network. That's why you access your development instance from your local IP instead of just `localhost`.

To access your dev server from your Google Pixel, simply navigate to `https://{your_ip_address}:8080` in Chrome Beta, and then tap the "VR" icon in the lower right hand corner of the page. This will start the VR initialization screen, which will open this app once the initialization is complete. Please note that the hot reloading functionality of WebPack Dev Server currently crashes WebGL in Chrome Beta. Hopefully the Chrome team will fix this soon. Also you should be aware, Chrome WebVR is relatively unstable. You're going to experience crashes that may have little or nothing to do with this app.

### Building and Deploying.
As aforementioned, this project uses Webpack to generate builds, and production builds are placed into the `dist` folder. To generate a build, run `npm run build:prod`.

### Testing
... is still in the works :)

# tilt

## Overview

Send tilt information of your smartphone into IBM Watson IoT Service Quickstart, and show them with node-red-dashboard.


## Install & Settings

- Login to [IBM Cloud](http://bluemix.net/)

- Create application from **Node-RED starter** boilerplate.

- Open Node-RED in IBM Cloud, and create flow with pasting flow.txt.

    - Before create flow, you need following nodes installed in your Node-RED, if not yet:

        - [node-red-dashboard - npm](https://www.npmjs.com/package/node-red-dashboard)

<img src="https://github.com/dotnsf/tilt/blob/master/public/flow.png"/>

- Deploy it once(not yet completed).

- git-clone or download-and-unzip this codes.

- Install dependencies:

    - ``$ npm install``

- (Optional)You can customize frequency of sending data.

    - Edit **exports.max_len** value in settings.js. You can decrease this number if you want to send more frequent data(but sending more amount of data). You can also increate this number if you want to send less frequent data(but sending less amount of data).

    - Default number is 10.

- Run with Node.js

    - ``$ node app``


## How to use

- With your smartphone, browse running application.

    - You will find your device id(randomly generated 12 digits) on top of your screen.

- Input that device id value into IBM IoT node of Node-RED.

- Deploy Node-RED flows.

- (Dashboard)With your PC, browse dashboard: https://******.mybluemix.net/ui

    - DIR: DIRection of your phone.

    - FB: Tilting information of Front and Back.

    - LR: Tilting information of Left and Right.

- (WebGL)With your PC, browse dashboard: http://******.mybluemix.net/box


## Licensing

This code is licensed under MIT.


## Copyright

2018 K.Kimura @ Juge.Me all rights reserved.

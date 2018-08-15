# tilt

## Overview

Send tilt information of your smartphone into IBM Watson IoT Service, and show them with node-red-dashboard.

## Install & Settings

- Login to [IBM Cloud](http://bluemix.net/)

- Create application from **Node-RED starter** boilerplate.

- Open Node-RED in IBM Cloud, and create flow with pasting flow.txt.

- Deploy it once(not yet completed).

- git-clone or download-and-unzip this codes.

- Install dependencies:

    - ``$ npm install``

- (Optional)You can customize frequency of sending data.

    - Edit max_data value in public/index.html. You can decrease this number if you want to send more frequent data(but sending more amount of data). You can also increate this number if you want to send less frequent data(but sending less amount of data).

    - Default number is 10.

- Run

    - ``$ node app``



## How to use

- With your smartphone, browse running application.

    - You will find your device id(12 digits) on top of your screen.

- Input that device id into IBM IoT node of Node-RED.

- Deploy Node-RED flows.

- With your PC, browse dashboard: https://******.mybluemix.net/ui/

    - DIR: DIRection of your phone.

    - FB: Tilting information of Front and Back.

    - LR: Tilting information of Left and Right.


## Licensing

This code is licensed under MIT.


## Copyright

2018 K.Kimura @ Juge.Me all rights reserved.

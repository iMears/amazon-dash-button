'use strict';

const dashButton = require('node-dash-button');
const dash = dashButton("74:75:48:19:b4:fe", null, null, 'all'); //address from step above

// warning this may trigger multiple times for one press
dash.on("detected", function () {
    console.log("omg found");
});

'use strict';

require('dotenv').config()

const connect = require('node-dash-button');
const dash = connect(process.env.DASH_ADDRESS, null, null, 'all');

// warning this may trigger multiple times for one press
dash.on("detected", () => {
  console.log("omg found");
});

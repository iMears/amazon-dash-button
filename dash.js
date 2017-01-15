'use strict';

require('dotenv').config()

const DashButton = require('node-dash-button');
const dashButton = DashButton(process.env.DASH_ADDRESS, null, null, 'all');
const findIPhone = require('./find');

// warning this may trigger multiple times for one press
dashButton.on('detected', () => {
  console.log('Button push detected!');
  findIPhone();
});

'use strict';

require('dotenv').config()

const DashButton = require('node-dash-button');
const dashButton = DashButton(process.env.DASH_ADDRESS, null, null, 'all');
const findIPhone = require('./find');
const _          = require('lodash');

console.log('Waiting for button push...')

dashButton.on('detected', () => {
  console.log('Button push detected!');

  // stops trigger multiple times for one button push
  _.throttle(findIPhone, 30000, { trailing: false });
});

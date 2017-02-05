'use strict';

const iCloud = require('find-my-iphone').findmyphone;

iCloud.apple_id = process.env.APPLE_ID;
iCloud.password = process.env.PASSWORD;

exports.handler = (event, context, callback) => {
  iCloud.getDevices((err, devices) => {
    if (err) callback(err);

    let device;

    devices.forEach((_device) => {
      if (_device.id === process.env.DEVICE_ID) {
        device = _device
      }
    });

    if (device) {
      iCloud.alertDevice(device.id, (err) => {
        if (err) callback(err);
        callback(null, "Beep Beep!");
      });
    } else {
      console.log('No device!');
      callback('No device!');
    }
  });
};

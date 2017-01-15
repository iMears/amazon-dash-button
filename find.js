var icloud = require('find-my-iphone').findmyphone;

require('dotenv').config()

icloud.apple_id = process.env.APPLE_ID;
icloud.password = process.env.PASSWORD;

module.exports = () => {
  icloud.getDevices((error, devices) => {
    if (error) throw error;

    var device;

    devices.forEach((_device) => {
      if (_device.name === process.env.DEVICE_NAME) {
        device = _device
      }
    });

    if (device) {
      icloud.alertDevice(device.id, (err) => {
        console.log("Beep Beep!");
      });
    }
  });
};

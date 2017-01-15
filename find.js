const iCloud = require('find-my-iphone').findmyphone;

iCloud.apple_id = process.env.APPLE_ID;
iCloud.password = process.env.PASSWORD;

module.exports = () => {
  iCloud.getDevices((err, devices) => {
    if (err) throw err;

    var device;

    devices.forEach((_device) => {
      if (_device.id === process.env.DEVICE_ID) {
        device = _device
      }
    });

    if (device) {
      iCloud.alertDevice(device.id, (err) => {
        if (err) console.error(err)
        console.log("Beep Beep!");
      });
    } else {
      console.log('No device!')
    }
  });
};

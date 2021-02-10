console.log('script!');

var electron = require('electron');

navigator.mediaDevices.enumerateDevices().then((devices) => {
    document.getElementById('devices').innerHTML = JSON.stringify(devices, null, 2);
});